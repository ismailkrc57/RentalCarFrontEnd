import { ResponseModel } from './responseModel';

export interface SingleResponseMode<T> extends ResponseModel {
  data: T;
}
