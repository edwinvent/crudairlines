import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AirlineComponent } from './airline.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AirlineComponent],
  exports: [AirlineComponent],
  imports: [RouterModule, FormsModule],
})
export class AirlineModule {}
