import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  GeneralAgencyStaff,
  PrimaryBrokerStaff,
  BrokerAgencyStaff,
  BrokerAgency,
  GeneralAgency,
} from '@hbx/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class BrokersApiService {
  private api = 'api/v1';

  constructor(private http: HttpClient) {}

  /**
   * Retrieves all broker agencies and general agencies
   */
  getAllAgencies(): Observable<Array<BrokerAgency | GeneralAgency>> {
    return this.http.get<Array<BrokerAgency | GeneralAgency>>(
      `${this.api}/brokers`
    );
  }

  /**
   * Retrieves all broker staff, i.e. person objects that have one of three
   * identified role properties
   */
  getAllAgencyStaff(): Observable<
    Array<GeneralAgencyStaff | PrimaryBrokerStaff | BrokerAgencyStaff>
  > {
    return this.http.get<
      Array<GeneralAgencyStaff | PrimaryBrokerStaff | BrokerAgencyStaff>
    >(`${this.api}/brokers/broker-staff`);
  }
}
