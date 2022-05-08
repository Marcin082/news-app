import {Weather } from "../../types/types";

export enum ActionWeatherTypes {
  GET_WEATHER = "GET_WEATHER",
}
interface GettingWeather {
  type: ActionWeatherTypes.GET_WEATHER;
  payload:Weather;
}


export type weatherAction = GettingWeather;