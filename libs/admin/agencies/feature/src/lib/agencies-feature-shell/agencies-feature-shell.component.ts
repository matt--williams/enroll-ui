import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { AgencyStaffFacade } from '../state/agency-staff/agency-staff.facade';
import { loadAgencyStaff } from '../state/agency-staff/agency-staff.actions';

@Component({
  selector: 'hbx-agencies-feature-shell',
  templateUrl: './agencies-feature-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgenciesFeatureShellComponent implements OnInit {
  constructor(private agencyStaffFacade: AgencyStaffFacade) {}

  ngOnInit() {
    this.agencyStaffFacade.dispatch(loadAgencyStaff());
  }
}
