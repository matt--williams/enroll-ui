import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  AgencyVM,
  AgencyStaffVM,
  PrimaryAgentVM,
  Dictionary,
} from '../shared/models';
import { AgencyStaffFacade } from '../state/agency-staff/agency-staff.facade';
import { AgenciesFacade } from '../state/agencies/agencies.facade';
import {
  Agency,
  GeneralAgencyStaff,
  BrokerAgencyStaff,
} from '@hbx/api-interfaces';
import { AgencyStaffEntity } from '../state/agency-staff/agency-staff.models';
import { createAgencyVMs } from '../utils/createAgencyVM';
import { createStaffVMs } from '../utils/createAgencyStaffVM';

@Component({
  templateUrl: './agency-staff.component.html',
  styleUrls: ['./agency-staff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgencyStaffComponent implements OnInit {
  agencyStaffVM$: Observable<AgencyStaffVM[]> = combineLatest([
    this.agenciesFacade.allAgencies$,
    this.agencyStaffFacade.primaryAgencyStaffEntities$,
    this.agencyStaffFacade.nonPrimaryAgencyStaff$,
  ]).pipe(
    map(
      ([agencies, primaryStaff, staff]: [
        Agency[],
        Dictionary<PrimaryAgentVM>,
        Array<GeneralAgencyStaff | BrokerAgencyStaff>
      ]) => createStaffVMs(agencies, primaryStaff, staff)
    )
  );

  agencyVMs$: Observable<AgencyVM[]> = combineLatest([
    this.agenciesFacade.allAgencies$,
    this.agencyStaffFacade.allAgencyStaff$,
  ]).pipe(
    map(([agencies, staff]: [Agency[], AgencyStaffEntity[]]) =>
      createAgencyVMs(agencies, staff)
    )
  );

  constructor(
    private agencyStaffFacade: AgencyStaffFacade,
    private agenciesFacade: AgenciesFacade
  ) {}

  ngOnInit(): void {}
}
