import { ListResopnseModel } from './../models/baseModels/listResponseModel';
import { Injectable } from '@angular/core';
import { ApiUrl } from './apiUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/entities/car';
import { CarDetail } from '../models/entities/carDetail';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiGetAllUrl = ApiUrl.baseUrl + 'api/Car/getall';
  private apiGetCarGetailsUrl = ApiUrl.baseUrl + 'api/Car/getcardetails';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResopnseModel<Car>> {
    return this.httpClient.get<ListResopnseModel<Car>>(this.apiGetAllUrl);
  }
  getCarsDetails(): Observable<ListResopnseModel<CarDetail>> {
    return this.httpClient.get<ListResopnseModel<CarDetail>>(
      this.apiGetCarGetailsUrl
    );
  }
}
