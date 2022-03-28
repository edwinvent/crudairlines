import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PassengerModel } from '../models/passenger.model';
@Injectable({
  providedIn: 'root',
})
export class PassengersService {
  public url = 'https://api.instantwebtools.net/v1';

  constructor(private http: HttpClient) {}
  
  getPassengers(page: number, pageSize:number) {
    return this.http.get(`${this.url}/passenger?page=${page}&size=${pageSize}`).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  getPassenger(id: string) {
    return this.http.get(`${this.url}/passenger/${id}`).pipe(
      map((data) => {
        return data;
      })
    );
  }

  createPassenger(passenger: PassengerModel) {
    return this.http.post(`${this.url}/passenger`, passenger).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  updatePassenger(passenger: PassengerModel) {
    return this.http
      .put(`${this.url}/passenger/${passenger._id}`, passenger)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }

  deletePassenger(passenger: PassengerModel) {
    return this.http.delete(`${this.url}/passenger/${passenger._id}`);
  }
}
