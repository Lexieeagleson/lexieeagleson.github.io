import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    HomeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    LandingPageRoutingModule
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class LandingPageModule { }
