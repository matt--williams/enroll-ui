import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hbx-agency-staff',
  templateUrl: './agency-staff.component.html',
  styleUrls: ['./agency-staff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgencyStaffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
