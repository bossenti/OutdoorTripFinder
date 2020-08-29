import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { TourListItemComponent } from './tour-list-item/tour-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TourDetailsComponent,
    TourListComponent,
    TourListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
