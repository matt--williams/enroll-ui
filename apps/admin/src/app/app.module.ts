import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'brokers',
          loadChildren: () =>
            import('@hbx/admin/brokers/feature').then(
              module => module.AdminBrokersFeatureModule
            ),
        },
        {
          path: '',
          redirectTo: 'brokers',
          pathMatch: 'full',
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
