import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PassengerModel } from 'src/app/models/passenger.model';
import { PassengersService } from 'src/app/services/passengers.service';

import { ModalFocusComponent } from 'src/app/tools/Modalsngb/modal-focus/modal-focus.component';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css'],
})
export class PassengersComponent implements OnInit {
  passengers: any[] = [];

  loading: boolean = false;

  page: number = 1;
  pageSize: number = 10;
  collect: number = 0;
  collection: number = 0;
  constructor(
    private passengersService: PassengersService,
    private modal: NgbModal
  ) {}

  ngOnInit() {
    this.getPassengers();
  }

  getPassengers() {
    this.loading = true;

    this.passengersService.getPassengers(this.page, this.pageSize).subscribe({
      next: (resp) => {
        this.passengers = resp.data;
        this.loading = false;
        this.collect = resp.totalPassengers;
        this.collection = this.collect - 10;
      },
      error: (err) => console.log(err),
    });
  }

  /* deletePassenger(passenger: PassengerModel) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.passengersService.deletePassenger(passenger).subscribe({
          next: () => {
            this.getPassengers();
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          },
          error: (err) => console.log(err),
        });
      }
    });
  } */
  deletePassenger(passenger: PassengerModel) {
    let instance = this.modal.open(ModalFocusComponent);

    instance.result.then((resp) => {
      console.log(resp);

    });
  }

  showPassenger(passenger: PassengerModel) {}

  pageChange(page: number) {
    this.getPassengers();
  }

  /* plusPage(){
    this.page += 1;
    this.getPassengers();
    }

    minusPage(){
      this.page -= 1;
      this.getPassengers();
      } */
}
