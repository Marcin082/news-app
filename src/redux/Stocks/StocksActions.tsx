import axios from "axios";
import { Stock } from "../../types/types";
import { ActionsStocksTypes } from "./StocksTypes";

export const getStocks = () => {
  return function (dispatch: any) {
    dispatch(fetchStocksRequest())
    axios
      .get<Stock[]>('https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=S%26P500%2CNVDA%2CAAPL%2CMSFT%2CTSLA%2CGOOGL%2CFB%2CAMZN%2CNKE',{
        headers: {
          'accept': 'application/json',
          'X-API-KEY': 'XrDrealUJn2y4m2VNNrXq4TnCYZuopZ5vHpvx130'
        }
       })
      .then((response) => {
        console.log(response.data)
        dispatch(fetchStocksSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchStocksFailure(error.message))
      })
  };
};
export const fetchStocksRequest = () => {
  return {
    type: ActionsStocksTypes.FETCH_STOCKS_REQUEST
  }
}

export const fetchStocksSuccess = (stocks:Stock[]) => {
  return {
    type:ActionsStocksTypes.FETCH_STOCKS_SUCCESS,
    payload: stocks
  }
}

export const fetchStocksFailure = (error:string) => {
  return {
    type: ActionsStocksTypes.FETCH_STOCKS_FAILURE,
    payload: error
  }
}