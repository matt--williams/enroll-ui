import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  GeneralAgencyStaff,
  PrimaryBrokerStaff,
  BrokerAgencyStaff,
  Agency,
} from '@hbx/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class AgenciesApiService {
  private api = 'api/v1';

  constructor(private http: HttpClient) {}

  /**
   * Retrieves all agencies (broker and general)
   */
  getAllAgencies(): Observable<Agency[]> {
    return this.http.get<Agency[]>(`${this.api}/agencies`);
  }

  /**
   * Retrieves all agency staff, i.e. person objects that have one of three
   * identified role properties
   */
  getAllAgencyStaff(): Observable<
    Array<GeneralAgencyStaff | PrimaryBrokerStaff | BrokerAgencyStaff>
  > {
    return this.http.get<
      Array<GeneralAgencyStaff | PrimaryBrokerStaff | BrokerAgencyStaff>
    >(`${this.api}/agencies/agency_staff`);
    // .pipe(tap(console.log));
  }
}
