import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AgencyStaffUiModule } from '@hbx/admin/shared/ui-components';

import { AgencyStaffComponent } from './agency-staff.component';

const routes: Routes = [{ path: '', component: AgencyStaffComponent }];

@NgModule({
  declarations: [AgencyStaffComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AgencyStaffUiModule,
  ],
})
export class AgencyStaffModule {}
