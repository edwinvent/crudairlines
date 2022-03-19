import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineComponent } from './pages/airline/airline.component';
import { AirlinesComponent } from './pages/airlines/airlines.component';

const routes: Routes = [
{ path: 'airlines', component: AirlinesComponent},
{ path: 'airline/:id', component: AirlineComponent},
{path: '**', pathMatch: 'full', redirectTo:'airlines'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
