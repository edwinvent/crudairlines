import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AirlineModule } from './pages/airline/airline.module';
import { AirlinesModule } from './pages/airlines/airlines.module';
import { HttpClientModule } from '@angular/common/http';
import { PassengerComponent } from './pages/passenger/passenger.component';
import { PassengersComponent } from './pages/passengers/passengers.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from './tools/toast/toast.module';
import { NgbdModalFocusModule } from './tools/Modalsngb/modal-focus/modal-focus.module';
import { ModalFocusComponent } from './tools/Modalsngb/modal-focus/modal-focus.component';

@NgModule({
  declarations: [AppComponent, PassengerComponent, PassengersComponent ],
  imports: [
    AirlineModule,
    AirlinesModule,
    ToastModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbdModalFocusModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents:[ModalFocusComponent]
})
export class AppModule {}
