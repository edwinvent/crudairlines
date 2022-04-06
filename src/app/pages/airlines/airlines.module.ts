import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AirlinesComponent } from './airlines.component';

@NgModule({
  declarations: [AirlinesComponent],
  imports: [RouterModule, CommonModule, ],
  exports: [AirlinesComponent],
})
export class AirlinesModule {}
