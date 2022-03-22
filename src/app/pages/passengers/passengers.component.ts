import { Component, OnDestroy, OnInit } from '@angular/core';
import { PassengerModel } from 'src/app/models/passenger.model';
import { PassengersService } from 'src/app/services/passengers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css'],
})
export class PassengersComponent implements OnInit {
  passengers: any[] = [];

  loading: boolean = false;

  constructor(private passengersService: PassengersService) {}

  ngOnInit() {
    this.getPassengers();
  }

  getPassengers() {
    this.loading = true;
    this.passengersService.getPassengers().subscribe({
      next: (resp) => {
        console.log(resp);
        this.passengers = resp;
        this.loading = false;
      },
      error: (err) => console.log(err),
    });
  }

  deletePassenger(passenger: PassengerModel) {
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
  }

  showPassenger(passenger: PassengerModel) {}
}