# Agency Staff and Agency API Responses

## Proposed Models

```ts
export interface AgencyStaff {
  // Likely needed to update demographic information
  personId: string;

  // Needed for Agency Staff List View
  fullName: string;
  hbxId: string;
  agencyRoles: AgentRole[];

  // Demographic Information
  email: string;
  dateOfBirth: string; // will be converted to date object
}

export interface AgentRole extends Agency {
  /**
   * ### Needed to terminate the link between agent and agency
   *
   * `_id` on the agency profile
   *
   * `benefit_sponsors_broker_agency_profile_id` on a broker agent
   *
   * `benefit_sponsors_general_agency_profile_id` on a general agent
   */
  roleId: string;

  /**
   * This isn't strictly required for any views, but may help clear
   * up the understanding of roles within an Agency
   */
  agencyPosition: AgencyPosition;

  /**
   * The current state of the role with the Agency
   */
  currentState: AgencyRoleState;

  /**
   * This is required for the detail page of each individual Agency Staff
   */
  roleChangeHistory: ChangeHistory<AgencyRoleState>[];
}

export enum AgencyPosition {
  Primary = 'Primary',
  Writing = 'Writing',
  Staff = 'Staff',
}

export const enum AgencyRoleState {
  Pending = 'Pending',
  Active = 'Active',
  Terminated = 'Terminated',
  Other = 'Other',
}

export interface ChangeHistory<T> {
  changedFrom: T;
  changedTo: T;
  changedAt: string; // will be converted to Date object
}

/**
 * This is the agent that will be listed underneath the Agency Name
 *
 * The requirements doc calls this the `Writing Agent`
 *
 * Is there a more generic name? This may influence the `AgencyPosition` enum
 */
export interface WritingAgent {
  /**
   * `primary_broker_role_id` on a Broker Agency profile
   *
   * `_id` on the `broker_role` object
   *
   * no analog for General Agency "primary" agent
   */
  agentId: string;
  fullName: string;
  npn: string; // what is the npn?
}

export interface Agency {
  legalName: string;
  agencyType: AgencyType;
  writingAgent: WritingAgent;
}

export enum AgencyType {
  Broker = 'Broker',
  General = 'General',
}
```

### API Service

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Agency } from '@hbx/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class AgenciesApiService {
  private api = 'api/v1';

  constructor(private http: HttpClient) {}

  /**
   * Retrieves all agencies (broker and general)
   *
   * Includes their "primary" agent
   */
  getAllAgencies(): Observable<Agency[]> {
    return this.http.get<Agency[]>(`${this.api}/agencies`);
  }

  /**
   * Retrieves all non-primary agency staff
   */
  getAllAgencyStaff(): Observable<AgencyStaff[]> {
    return this.http.get<AgencyStaff[]>(`${this.api}/agencies/agency_staff`);
    // .pipe(tap(console.log));
  }
}
```
