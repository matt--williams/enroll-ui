import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { AgencyStaffFacade } from '../state/agency-staff/agency-staff.facade';
import { AgenciesFacade } from '../state/agencies/agencies.facade';
import * as AgencyStaffActions from '../state/agency-staff/agency-staff.actions';
import * as AgenciesActions from '../state/agencies/agencies.actions';

@Component({
  selector: 'hbx-agencies-feature-shell',
  templateUrl: './agencies-feature-shell.component.html',
  styleUrls: ['./agencies-feature-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgenciesFeatureShellComponent implements OnInit {
  constructor(
    private agencyStaffFacade: AgencyStaffFacade,
    private agenciesFacade: AgenciesFacade
  ) {}

  ngOnInit() {
    this.agencyStaffFacade.dispatch(AgencyStaffActions.loadAgencyStaff());
    this.agenciesFacade.dispatch(AgenciesActions.loadAgencies());
  }
}
