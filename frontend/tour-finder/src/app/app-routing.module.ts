import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TourListComponent} from './tour-list/tour-list.component';
import {TourDetailsComponent} from './tour-details/tour-details.component';
import {TourSearchComponent} from './tour-search/tour-search.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tours',
    component: TourListComponent,
  },
  {
    path: 'tours/:id',
    component: TourDetailsComponent
  },
  {
    path: 'search',
    component: TourSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
