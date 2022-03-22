import { AirlineModel } from './airline.model';

export class PassengerModel {
  _id: string;
  name: string;
  trips: string;
  airline: AirlineModel;
  constructor() {}
}
