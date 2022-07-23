import { Weather } from '../../types/types'
import { ActionWeatherTypes, weatherAction } from './WeatherTypes'

const initialState = {
  weather: {}
}
interface State{
  weather:Weather|any,
}
export const weatherReducer = (state:State = initialState, action:weatherAction):State => {
  switch (action.type) {
    case ActionWeatherTypes.GET_WEATHER:
      return {
        ...state,
        weather: action.payload
      }

    default: return state
  }
}
