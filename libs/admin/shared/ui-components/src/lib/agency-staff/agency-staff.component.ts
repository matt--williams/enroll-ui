import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { AgencyStaffVM } from '@hbx/admin/shared/view-models';

@Component({
  selector: 'hbx-agency-staff',
  templateUrl: './agency-staff.component.html',
  styleUrls: ['./agency-staff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgencyStaffComponent {
  @Input() agencyStaff: AgencyStaffVM;
}
