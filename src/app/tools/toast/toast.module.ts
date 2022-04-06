import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './toast.component';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, NgbModule],
  exports: [ToastComponent],
})
export class ToastModule {}
