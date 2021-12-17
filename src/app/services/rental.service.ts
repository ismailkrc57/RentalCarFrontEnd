import { ApiUrl } from './apiUrl';
import { RentalDetail } from './../models/entities/rentalDetail';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResopnseModel } from '../models/baseModels/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  getallrentaldetailsUrl: string =
    ApiUrl.baseUrl + 'api/Rental/getallrentaldetails';
  constructor(private httpClient: HttpClient) {}
  getAllRentalDetails(): Observable<ListResopnseModel<RentalDetail>> {
    return this.httpClient.get<ListResopnseModel<RentalDetail>>(
      this.getallrentaldetailsUrl
    );
  }
}
