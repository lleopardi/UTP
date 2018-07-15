import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { MapIssComponent } from "./map-iss/map-iss.component";

import { PeopleListComponent } from "./people-list/people-list.component";

@NgModule({
  declarations: [
    AppComponent,
    MapIssComponent,
    PeopleListComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
