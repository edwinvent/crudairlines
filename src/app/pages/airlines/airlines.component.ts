import { Component, OnInit } from '@angular/core';
import { AirlineModel } from 'src/app/models/airline.model';
import { AirlinesService } from 'src/app/services/airlines.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css'],
})
export class AirlinesComponent implements OnInit {
  airlines: AirlineModel[] = [];

  loading: boolean = false;

  constructor(private airlinesService: AirlinesService) {}

  ngOnInit() {
    this.getAirlines();
  }

  getAirlines() {
    this.loading = true;
    this.airlinesService.getAirlines().subscribe({
      next: (resp) => {
        this.airlines = resp;
        this.loading = false;
      },
      error: (err) => console.log(err),
    });
  }

  showAirline(airline: AirlineModel) {}

  /* 
  borrarAirline(airline: AirlineModel) {
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
        this.airlinesService.borrarAirline(airline.id).subscribe({
          next: () => {
          this.getAirlines();
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          },
          error: (err) => console.log(err),
        });
      }
    });
     
  }*/
}
