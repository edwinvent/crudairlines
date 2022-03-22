import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineComponent } from './pages/airline/airline.component';
import { AirlinesComponent } from './pages/airlines/airlines.component';
import { PassengerComponent } from './pages/passenger/passenger.component';
import { PassengersComponent } from './pages/passengers/passengers.component';

const routes: Routes = [
  { path: 'airlines', component: AirlinesComponent },
  { path: 'airline', component: AirlineComponent },
  { path: 'airline/:id', component: AirlineComponent },
  { path: 'passengers', component: PassengersComponent },
  { path: 'passenger', component: PassengerComponent },
  { path: 'passenger/:id', component: PassengerComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'airlines' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
