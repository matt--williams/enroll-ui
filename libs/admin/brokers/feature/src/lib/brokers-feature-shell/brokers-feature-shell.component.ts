import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { AgencyStaffFacade } from '../state/agency-staff/agency-staff.facade';
import { loadAgencyStaff } from '../state/agency-staff/agency-staff.actions';

@Component({
  selector: 'hbx-brokers-feature-shell',
  templateUrl: './brokers-feature-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrokersFeatureShellComponent implements OnInit {
  constructor(private agencyStaffFacade: AgencyStaffFacade) {}

  ngOnInit() {
    this.agencyStaffFacade.dispatch(loadAgencyStaff());
  }
}
