import { Color } from './../models/entities/color';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResopnseModel } from '../models/baseModels/listResponseModel';
import { ApiUrl } from './apiUrl';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  private getallUrl = ApiUrl.baseUrl + 'api/Color/getall';
  constructor(private httpClient: HttpClient) {}

  getAllColor(): Observable<ListResopnseModel<Color>> {
    return this.httpClient.get<ListResopnseModel<Color>>(this.getallUrl);
  }
}
