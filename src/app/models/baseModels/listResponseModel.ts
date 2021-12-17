import { ResponseModel } from './responseModel';

export interface ListResopnseModel<T> extends ResponseModel {
  data: T[];
}
