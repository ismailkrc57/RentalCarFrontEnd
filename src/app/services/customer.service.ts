import { ListResopnseModel } from './../models/baseModels/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from './apiUrl';
import { Injectable } from '@angular/core';
import { Customer } from '../models/entities/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private getallUrl: string = ApiUrl.baseUrl + 'api/Customer/getall';
  constructor(private httpCLient: HttpClient) {}

  getAllCustomers(): Observable<ListResopnseModel<Customer>> {
    return this.httpCLient.get<ListResopnseModel<Customer>>(this.getallUrl);
  }
}
