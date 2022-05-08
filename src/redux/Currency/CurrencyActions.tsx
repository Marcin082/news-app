import axios from "axios";
import { Stock } from "../../types/types";
import { ActionsCurrenciesTypes } from "./CurrencyTypes";

export const getCurrencies = () => {
  return function (dispatch: any) {
    dispatch(fetchCurrenciesRequest())
    axios
      .get<Stock[]>('https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=EURUSD%3DX%2CEURGBP%3DX%2CGBPUSD%3DX%2CUSDJPY%3DX%2CAUDUSD%3DX%2CUSDCHF%3DX%2CUSDCAD%3DX%2CEURCHF%3DX%2CGBPJPY%3DX',{
        headers: {
          'x-api-key': 'XrDrealUJn2y4m2VNNrXq4TnCYZuopZ5vHpvx130'
        }
       })
      .then((response) => {
        console.log(response.data)
        dispatch(fetchCurrenciesSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchCurrenciesFailure(error.message))
      })
  };
};
export const fetchCurrenciesRequest = () => {
  return {
    type: ActionsCurrenciesTypes.FETCH_CURRENCIES_REQUEST
  }
}

export const fetchCurrenciesSuccess = (currencies:Stock[]) => {
  return {
    type:ActionsCurrenciesTypes.FETCH_CURRENCIES_SUCCESS,
    payload: currencies
  }
}

export const fetchCurrenciesFailure = (error:string) => {
  return {
    type: ActionsCurrenciesTypes.FETCH_CURRENCIES_FAILURE,
    payload: error
  }
}