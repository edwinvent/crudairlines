import { Component, OnInit } from '@angular/core';
import { AirlineModel } from 'src/app/models/airline.model';
import { AirlinesService } from 'src/app/services/airlines.service';
import  Swal  from 'sweetalert2'; 
@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css']
})
export class AirlinesComponent implements OnInit {

  airline: AirlineModel[] = [];

  constructor(private airlinesService: AirlinesService) {}

  ngOnInit() {
    this.airlinesService.getAirlines().subscribe((resp) => (this.airlines = resp));
  }
  borrarAirline(heroe: AirlineModel, i: number) {
    Swal.fire('Are You Sure?', '', 'question');
    Swal.update({ showConfirmButton: true });
    Swal.update({ showCancelButton: true });

   /*  this.airlines.splice(i, 1); */
    this.airlinesService.borrarAirline(heroe.id).subscribe();
  }
}
