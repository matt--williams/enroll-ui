import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './agency-staff.component.html',
  styleUrls: ['./agency-staff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgencyStaffComponent implements OnInit {
  // agencyStaffVM$: Observable<AgencyStaffVM[]> = combineLatest([
  //   this.agenciesFacade.allAgencies$,
  //   this.agencyStaffFacade.nonPrimaryAgencyStaff$,
  //   this.agencyStaffFacade,
  // ]);

  constructor() // private agencyStaffFacade: AgencyStaffFacade,
  // private agenciesFacade: AgenciesFacade
  {}

  ngOnInit(): void {}
}
