import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ModalFocusComponent } from './modal-focus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ModalFocusComponent],
  imports: [
    CommonModule,NgbModule,BrowserModule
  ],
  exports: [ModalFocusComponent],
  bootstrap: [ModalFocusComponent],
  entryComponents: [ModalFocusComponent]
})
export class NgbdModalFocusModule { }
