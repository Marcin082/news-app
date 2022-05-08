import axios from "axios";
import {  Weather } from "../../types/types";
import { ActionWeatherTypes } from "./WeatherTypes";
const KEY1="Y8ZMBVT79Z4TJAQG53F8M5A42"
const KEY2="HQDGK3R2LFVM6BVHM9NYF3CRY"
export const getWeather = (location:String) => {
  return function (dispatch: any) {
    axios
      .get<Weather>(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${KEY1}`)
      .then((response) => {
        console.log(response.data)
        dispatch({
          type: ActionWeatherTypes.GET_WEATHER,
          payload: response.data,
        });
      })
  };
};

