import {
  BrokerAgencyStaff,
  PrimaryBrokerStaff,
  GeneralAgencyStaff,
  WorkflowStateTransition,
  BrokerRoleState,
  BrokerAgencyStaffRoleState,
  GeneralAgencyStaffRoleState,
} from '@hbx/api-interfaces';
import {
  AgencyStaffEntity,
  AgencyRoleState,
  StaffRole,
  StateTransitionHistory,
} from '../state/broker-staff/agency-staff.models';
import { isGeneralAgencyStaff, isPrimaryBroker } from './checkStaffType';

export function convertStaff(
  agencyStaff: BrokerAgencyStaff | PrimaryBrokerStaff | GeneralAgencyStaff
): AgencyStaffEntity {
  const {
    broker_role,
    broker_agency_staff_roles,
    general_agency_staff_roles,
    ...basePerson
  } = agencyStaff;

  const brokerStaffEntity: AgencyStaffEntity = {
    ...basePerson,
    staffRoles: staffRoles(agencyStaff),
  };

  return brokerStaffEntity;
}

function staffRoles(
  agencyStaff: BrokerAgencyStaff | PrimaryBrokerStaff | GeneralAgencyStaff
): StaffRole[] {
  if (isGeneralAgencyStaff(agencyStaff)) {
    return generateRolesFromGeneralAgencyStaff(agencyStaff);
  } else {
    if (isPrimaryBroker(agencyStaff)) {
      return generateRolesFromPrimaryBroker(agencyStaff);
    } else {
      return generateRolesFromBrokerAgencyStaff(agencyStaff);
    }
  }
}

function convertStateTransitions(
  stateTransitions: WorkflowStateTransition<
    BrokerRoleState | BrokerAgencyStaffRoleState | GeneralAgencyStaffRoleState
  >[]
): StateTransitionHistory[] {
  return stateTransitions.map(stateTransition => {
    const {
      _id,
      from_state,
      transition_at,
      updated_at,
      created_at,
    } = stateTransition;

    const transition: StateTransitionHistory = {
      _id,
      ...(from_state && {
        from_state: convertRoleState(from_state) as AgencyRoleState,
      }),
      to_state: convertRoleState(stateTransition.to_state),
      ...(transition_at && { transition_at: new Date(transition_at) }),
      ...(updated_at && { updated_at: new Date(updated_at) }),
      ...(created_at && { created_at: new Date(created_at) }),
    };

    return transition;
  });
}

function convertRoleState(
  roleState:
    | BrokerRoleState
    | BrokerAgencyStaffRoleState
    | GeneralAgencyStaffRoleState
): AgencyRoleState {
  if (roleState === 'active') {
    return AgencyRoleState.Active;
  }

  if (roleState.includes('pending')) {
    return AgencyRoleState.Pending;
  }

  if (roleState.includes('terminated')) {
    return AgencyRoleState.Terminated;
  }

  return AgencyRoleState.Other;
}

function generateRolesFromGeneralAgencyStaff(
  agencyStaff: GeneralAgencyStaff
): StaffRole[] {
  return agencyStaff.general_agency_staff_roles.map(role => {
    const {
      aasm_state,
      workflow_state_transitions,
      benefit_sponsors_general_agency_profile_id,
      is_primary,
      ...baseRole
    } = role;

    const staffRole: StaffRole = {
      ...baseRole,
      aasm_state: convertRoleState(aasm_state),
      workflow_state_transitions: convertStateTransitions(
        workflow_state_transitions
      ),
      agencyId: benefit_sponsors_general_agency_profile_id,
      primaryStaff: is_primary,
    };

    return staffRole;
  });
}

function generateRolesFromBrokerAgencyStaff(
  agencyStaff: BrokerAgencyStaff
): StaffRole[] {
  return agencyStaff.broker_agency_staff_roles.map(role => {
    const {
      aasm_state,
      workflow_state_transitions,
      benefit_sponsors_broker_agency_profile_id,
      ...baseRole
    } = role;

    const staffRole: StaffRole = {
      ...baseRole,
      aasm_state: convertRoleState(aasm_state),
      workflow_state_transitions: convertStateTransitions(
        workflow_state_transitions
      ),
      agencyId: benefit_sponsors_broker_agency_profile_id,
      primaryStaff: false,
    };

    return staffRole;
  });
}

function generateRolesFromPrimaryBroker(
  agencyStaff: PrimaryBrokerStaff
): StaffRole[] {
  const {
    aasm_state,
    workflow_state_transitions,
    benefit_sponsors_broker_agency_profile_id,
    _id,
    npn,
    tracking_version,
  } = agencyStaff.broker_role;

  const staffRole: StaffRole = {
    _id,
    npn,
    tracking_version,
    aasm_state: convertRoleState(aasm_state),
    workflow_state_transitions: convertStateTransitions(
      workflow_state_transitions
    ),
    agencyId: benefit_sponsors_broker_agency_profile_id,
    primaryStaff: true,
  };

  return [staffRole];
}
