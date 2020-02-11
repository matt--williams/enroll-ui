import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AgencyStaffFacade } from '../state/agency-staff/agency-staff.facade';

@Component({
  templateUrl: './agency-staff.component.html',
  styleUrls: ['./agency-staff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgencyStaffComponent implements OnInit {
  constructor(public agencyStaffFacade: AgencyStaffFacade) {}

  ngOnInit(): void {}
}
