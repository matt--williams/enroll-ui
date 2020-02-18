import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import {
  map,
  startWith,
  distinctUntilChanged,
  debounceTime,
} from 'rxjs/operators';

import {
  AgencyStaffVM,
  Dictionary,
  PrimaryAgentVM,
} from '@hbx/admin/shared/view-models';
import {
  Agency,
  GeneralAgencyStaff,
  BrokerAgencyStaff,
} from '@hbx/api-interfaces';

import { AgencyStaffFacade } from '../state/agency-staff/agency-staff.facade';
import { AgenciesFacade } from '../state/agencies/agencies.facade';
import { createStaffVMs, searchAgencyStaff } from '../utils';

@Component({
  templateUrl: './agency-staff.component.html',
  styleUrls: ['./agency-staff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgencyStaffComponent implements OnInit {
  globalSearch: FormControl = new FormControl();

  globalSearch$: Observable<string> = this.globalSearch.valueChanges.pipe(
    debounceTime(200),
    map((query: string) => query.trim().toLowerCase())
  );

  agencyStaffVM$: Observable<AgencyStaffVM[]> = combineLatest([
    this.globalSearch$.pipe(startWith('')),
    this.agenciesFacade.allAgencies$,
    this.agencyStaffFacade.primaryAgencyStaffEntities$,
    this.agencyStaffFacade.nonPrimaryAgencyStaff$,
  ]).pipe(
    distinctUntilChanged(),
    map(
      ([globalSearch, agencies, primaryStaff, staff]: [
        string,
        Agency[],
        Dictionary<PrimaryAgentVM>,
        Array<GeneralAgencyStaff | BrokerAgencyStaff>
      ]) => {
        return [globalSearch, createStaffVMs(agencies, primaryStaff, staff)];
      }
    ),
    map(([searchQuery, agencyStaffVMs]: [string, AgencyStaffVM[]]) => {
      return searchAgencyStaff(searchQuery, agencyStaffVMs);
    })
  );

  // agencyVMs$: Observable<AgencyVM[]> = combineLatest([
  //   this.agenciesFacade.allAgencies$,
  //   this.agencyStaffFacade.allAgencyStaff$,
  // ]).pipe(
  //   map(([agencies, staff]: [Agency[], AgencyStaffEntity[]]) =>
  //     createAgencyVMs(agencies, staff)
  //   )
  // );

  constructor(
    private agencyStaffFacade: AgencyStaffFacade,
    private agenciesFacade: AgenciesFacade
  ) {}

  ngOnInit(): void {}

  logChange(event: any): void {
    console.log(event);
  }
}
