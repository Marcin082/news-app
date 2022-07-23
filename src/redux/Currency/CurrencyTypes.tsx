/* eslint-disable no-unused-vars */
import { Stock } from '../../types/types'

export enum ActionsCurrenciesTypes {
  FETCH_CURRENCIES_REQUEST='FETCH_CURRENCIES_REQUEST',
  FETCH_CURRENCIES_SUCCESS='FETCH_CURRENCIES_SUCCESS',
  FETCH_CURRENCIES_FAILURE='FETCH_CURRENCIES_FAILURE'
}
interface Request {
  type: ActionsCurrenciesTypes.FETCH_CURRENCIES_REQUEST;
}
interface Success {
  type: ActionsCurrenciesTypes.FETCH_CURRENCIES_SUCCESS;
  payload:Stock[];
}
interface Error {
  type: ActionsCurrenciesTypes.FETCH_CURRENCIES_FAILURE;
  payload:string;
}
export type currenciesAction = Request|Success|Error;
