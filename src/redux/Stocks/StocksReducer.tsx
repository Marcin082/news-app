import { Stock } from '../../types/types'
import { ActionsStocksTypes, stocksAction } from './StocksTypes'

const initialState = {
  loading: false,
  error: '',
  stocks: []
}
interface State{
  loading: boolean,
  error: string,
  stocks:any|Stock[]
}
export const stocksReducer = (state:State = initialState, action:stocksAction):State => {
  switch (action.type) {
    case ActionsStocksTypes.FETCH_STOCKS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ActionsStocksTypes.FETCH_STOCKS_SUCCESS:
      return {
        loading: false,
        stocks: action.payload,
        error: ''
      }
    case ActionsStocksTypes.FETCH_STOCKS_FAILURE:
      return {
        loading: false,
        stocks: [],
        error: action.payload
      }
    default: return state
  }
}
