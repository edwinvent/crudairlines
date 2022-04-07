import { Component, OnInit, Type } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PassengerModel } from 'src/app/models/passenger.model';

@Component({
  selector: 'app-modal-focus',
  templateUrl: './modal-focus.component.html',
})
export class ModalFocusComponent {
  constructor(public modal: NgbActiveModal) {}
  MODALS: { [name: string]: Type<any> } = {
    focusFirst: ModalFocusComponent
  }


  action(value: boolean): void {



    this.modal.close(value);

    if (value){
      console.log('ELIMINADO')
    }

  }




}
