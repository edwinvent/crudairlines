import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AirlineModule } from './pages/airline/airline.module';
import { AirlinesModule } from './pages/airlines/airlines.module';
import { AirlinesService } from './services/airlines.service';
import { HttpClientModule } from '@angular/common/http';
import { PassengerComponent } from './pages/passenger/passenger.component';
import { PassengersComponent } from './pages/passengers/passengers.component';

@NgModule({
  declarations: [AppComponent, PassengerComponent, PassengersComponent],
  imports: [
    AirlineModule,
    AirlinesModule,

    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
