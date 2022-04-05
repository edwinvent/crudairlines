import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { AirlineModel } from 'src/app/models/airline.model';
import { AirlinesService } from 'src/app/services/airlines.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css'],
})
export class AirlineComponent implements OnInit {
  airline : AirlineModel;

  constructor(
    private airlinesService: AirlinesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
  }

  getAirline() {}

  guardar(form: NgForm) {
    if (form.invalid) {
      console.log('Invalid Form');
      return;
    }

    Swal.fire('Wait', 'Saving data', 'info');
    Swal.fire({ allowOutsideClick: false });
    Swal.showLoading();

    let peticion: Observable<any>;

    /* if (this.airline.id) {
      peticion = this.airlinesService.actualizarAirline(this.airline);
    } else {
      peticion = this.airlinesService.postAirlines(this.airline);
    } */

    peticion.subscribe((resp) => {
      Swal.fire({
        title: this.airline.name,
        text: 'Successfully Updated',
        icon: 'success',
      });
    });
  }
}
