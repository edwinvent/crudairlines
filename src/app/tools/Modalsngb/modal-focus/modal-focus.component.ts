import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PassengersService } from 'src/app/services/passengers.service';
@Component({
  selector: 'app-modal-focus',
  templateUrl: './modal-focus.component.html',
})
export class ModalFocusComponent {
  constructor(public modal: NgbActiveModal, private passengersService: PassengersService) {}
 /*  MODALS: { [name: string]: Type<any> } = {
    focusFirst: ModalFocusComponent
  } */

  @Input() pasajero



  action(value: boolean): void {



    this.modal.close(value);


  }




}
