import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AirlineComponent } from './airline.component';

@NgModule({
  declarations: [
    AirlineComponent,
  ],
  exports: [
AirlineComponent
  ],
imports:[
FormsModule
],

})
export class AirlineModule { }
