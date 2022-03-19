import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AirlinesComponent } from './airlines.component';

@NgModule({
  declarations: [
    AirlinesComponent,
  ],
  exports: [
AirlinesComponent
  ],
  imports:[
RouterModule,
CommonModule,
  ],
})
export class AirlinesModule { }
