import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Agency,
  PrimaryBrokerStaff,
  GeneralAgencyStaff,
  BrokerAgencyStaff,
} from '@hbx/api-interfaces';
@Component({
  selector: 'hbx-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Agency[]>('api/v1/agencies')
      .subscribe(a => console.log('Agencies', a));

    this.http
      .get<Array<PrimaryBrokerStaff | GeneralAgencyStaff | BrokerAgencyStaff>>(
        'api/v1/agencies/agency-staff'
      )
      .subscribe(as => console.log('Agency Staff', as));
  }
}
