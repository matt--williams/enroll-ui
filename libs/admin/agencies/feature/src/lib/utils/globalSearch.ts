import {
  AgencyStaffVM,
  AgencyAssociation,
} from '@hbx/admin/shared/view-models';

export function searchAgencyStaff(
  query: string,
  agencyStaffVMs: AgencyStaffVM[]
): AgencyStaffVM[] {
  if (query === null || query.length === 0) {
    return agencyStaffVMs;
  } else {
    return agencyStaffVMs.filter(agencyStaff => {
      return (
        searchAgentName(query, agencyStaff) ||
        searchAgencyNames(query, agencyStaff) ||
        searchHBXId(query, agencyStaff) ||
        searchPrimaryAgent(query, agencyStaff)
      );
    });
  }
}

function searchAgentName(query: string, agencyStaff: AgencyStaffVM): boolean {
  return agencyStaff.fullName.toLowerCase().includes(query);
}

function searchAgencyNames(query: string, agencyStaff: AgencyStaffVM): boolean {
  const associations: AgencyAssociation[] = agencyStaff.agencyAssociations;

  return (
    associations.filter(agency =>
      agency.agencyName.toLowerCase().includes(query)
    ).length > 0
  );
}

function searchHBXId(query: string, agencyStaff: AgencyStaffVM): boolean {
  return agencyStaff.hbxId.toLowerCase().includes(query);
}

function searchPrimaryAgent(
  query: string,
  agencyStaff: AgencyStaffVM
): boolean {
  const associations: AgencyAssociation[] = agencyStaff.agencyAssociations;

  return (
    associations.filter(agency =>
      agency.primaryAgent.fullName.toLowerCase().includes(query)
    ).length > 0
  );
}
