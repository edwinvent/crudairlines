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
}
