import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AirlineModel } from '../models/airline.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AirlinesService {
  private url = 'https://api.instantwebtools.net/v1';

  constructor(private http: HttpClient) {}

  getAirlines() {
    return this.http.get(`${this.url}/airlines`).pipe(map(this.crearArreglo));
  }

  getAirline(id: string) {
    return this.http
      .get(`${this.url}airlines/${id}`)
      .pipe(map((resp: any) => resp));
  }

  postAirlines(airline: AirlineModel) {
    return this.http.post(`${this.url}/airlines`, airline).pipe(
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

  borrarpassenger(id: string) {
    return this.http.delete(`${this.url}/passenger/${id}`);
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
