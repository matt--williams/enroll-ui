import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffContainerComponent } from './staff-container/staff-container.component';
import { AgencyAssociationComponent } from '../agency-association/agency-association.component';

@NgModule({
  declarations: [StaffContainerComponent, AgencyAssociationComponent],
  imports: [CommonModule],
  exports: [StaffContainerComponent, AgencyAssociationComponent],
})
export class AgencyStaffUiModule {}
