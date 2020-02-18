import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { AgencyStaffVM } from '@hbx/admin/shared/view-models';

@Component({
  selector: 'hbx-staff-container',
  templateUrl: './staff-container.component.html',
  styleUrls: ['./staff-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaffContainerComponent {
  @Input() staff: AgencyStaffVM;
}
