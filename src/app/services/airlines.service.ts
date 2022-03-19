import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AirlineModel } from '../models/airline.model';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AirlinesService {
  private url = 'https://api.instantwebtools.net/v1/airlines';

  constructor(private http: HttpClient) {}

  crearAirline(airline: AirlineModel) {
    return this.http.post(`${this.url}`, airline).pipe(
      map((resp: any) => {
        airline.id = resp.name;
        return airline;
      })
    );
  }

  actualizarAirline(airline: AirlineModel) {
    const airlineTemp = {
      ...airline,
    };

    delete airlineTemp.id;
    return this.http.put(`${this.url}${airline.id}`, airlineTemp);
  }

  borrarAirline(id: string) {
    return this.http.delete(`${this.url}${id}`);
  }

  getAirline(id: string) {
    return this.http.get(`${this.url}/:id`);
  }

  getAirlines() {
    return this.http
      .get(`${this.url}`)
      .pipe(map(this.crearArreglo));
  }
  private crearArreglo(airlinesObj: object) {
    const airlines: AirlineModel[] = [];

    if (airlinesObj === null) {
      return [];
    }

    Object.keys(airlinesObj).forEach((key) => {
      const airline: AirlineModel = airlinesObj[key];
      airline.id = key;

      airlines.push(airline);
    });
    return airlines;
  }
}