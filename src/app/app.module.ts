import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MapIssComponent } from './map-iss/map-iss.component';

import { AgmCoreModule } from '@agm/core';
import { PeopleListComponent } from './people-list/people-list.component';



@NgModule({
  declarations: [
    AppComponent,
    MapIssComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEefRDGoJ1hCfMeXe-9i9U84fUWpQkmUE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
