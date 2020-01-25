import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import { SpacingComponent } from './spacing/spacing.component';

@NgModule({
  declarations: [AppComponent, TypographyComponent, SpacingComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'typography',
          component: TypographyComponent,
        },
        {
          path: 'spacing',
          component: SpacingComponent,
        },
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'typography',
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
