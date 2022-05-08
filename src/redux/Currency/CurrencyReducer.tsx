import {  Stock } from "../../types/types"
import { ActionsCurrenciesTypes, currenciesAction } from "./CurrencyTypes"

const initialState = {
  loading: false,
  error: '',
  currencies:[]
}
interface State{
  loading: boolean,
  error: string,
  currencies:any|Stock[]
}
export const currenciesReducer = (state:State = initialState, action:currenciesAction):State => {
  switch (action.type) {
    case ActionsCurrenciesTypes.FETCH_CURRENCIES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ActionsCurrenciesTypes.FETCH_CURRENCIES_SUCCESS:
      return {
        loading: false,
        currencies: action.payload,
        error: ''
      }
    case ActionsCurrenciesTypes.FETCH_CURRENCIES_FAILURE:
      return {
        loading: false,
        currencies: [],
        error: action.payload
      }
    default: return state
  }
}