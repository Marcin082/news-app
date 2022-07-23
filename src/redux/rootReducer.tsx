import { combineReducers } from 'redux'
import { articlesReducer } from './Articles/ArticlesReducer'
import { currenciesReducer } from './Currency/CurrencyReducer'
import { stocksReducer } from './Stocks/StocksReducer'
import { weatherReducer } from './Weather/WeatherReducer'

const reducers = combineReducers({
  news: articlesReducer,
  market: stocksReducer,
  exchange: currenciesReducer,
  climate: weatherReducer
})
export type RootState = ReturnType<typeof reducers>

export default reducers
