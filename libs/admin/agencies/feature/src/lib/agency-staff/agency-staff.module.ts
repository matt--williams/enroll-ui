import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AgencyStaffComponent } from './agency-staff.component';

const routes: Routes = [{ path: '', component: AgencyStaffComponent }];

@NgModule({
  declarations: [AgencyStaffComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AgencyStaffModule {}
