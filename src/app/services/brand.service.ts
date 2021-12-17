import { Brand } from './../models/entities/brand';
import { ListResopnseModel } from './../models/baseModels/listResponseModel';
import { Observable, retry } from 'rxjs';
import { ApiUrl } from './apiUrl';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private getallUrl = ApiUrl.baseUrl + 'api/Brand/getall';
  constructor(private httpClient: HttpClient) {}

  getAllBrand(): Observable<ListResopnseModel<Brand>> {
    return this.httpClient.get<ListResopnseModel<Brand>>(this.getallUrl);
  }
}
