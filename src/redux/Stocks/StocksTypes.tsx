/* eslint-disable no-unused-vars */
import { Stock } from '../../types/types'

export enum ActionsStocksTypes {
  FETCH_STOCKS_REQUEST='FETCH_STOCKS_REQUEST',
  FETCH_STOCKS_SUCCESS='FETCH_STOCKS_SUCCESS',
  FETCH_STOCKS_FAILURE='FETCH_STOCKS_FAILURE'
}
interface Request {
  type: ActionsStocksTypes.FETCH_STOCKS_REQUEST;
}
interface Success {
  type: ActionsStocksTypes.FETCH_STOCKS_SUCCESS;
  payload:Stock[] | any;
}
interface Error {
  type: ActionsStocksTypes.FETCH_STOCKS_FAILURE;
  payload:string;
}
export type stocksAction = Request|Success|Error;
