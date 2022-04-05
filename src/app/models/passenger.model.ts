import { AirlineModel } from './airline.model';

export interface PassengerModel {
  _id: string;
  name: string;
  trips: string;
  airline: AirlineModel;
}
