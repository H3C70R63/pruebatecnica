import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { CargoordersComponent } from './components/cargoorders/cargoorders.component';
import { CargodetailsComponent } from './components/cargodetails/cargodetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/cargoorders', pathMatch: 'full' },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'cargoorders', component: CargoordersComponent },
  { path: 'cargodetails', component: CargodetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
