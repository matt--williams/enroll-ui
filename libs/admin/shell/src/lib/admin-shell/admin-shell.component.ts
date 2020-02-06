import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hbx-admin-shell',
  templateUrl: './admin-shell.component.html',
  styleUrls: ['./admin-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
