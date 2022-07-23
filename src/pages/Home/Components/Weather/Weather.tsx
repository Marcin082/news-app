import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from '../../../../redux/Weather/WeatherActions'
import { Wrapper, LocationSearch, TodayDescription, TodayDegree, City, DayCard, Details, Value, DayName, FahrenheitIcon, Degree, WeatherDraw } from './Weather.styled'
import { RootState } from '../../../../redux/rootReducer'
import { Day } from '../../../../types/types'
const Weather = () => {
  const dispatch = useDispatch()
  const weather = useSelector((state: RootState) => state?.climate?.weather)
  const [location, setLocation] = useState<string>('New York')
  useEffect(() => {
    dispatch(getWeather(location))
  }, [location])
  console.log(weather)

  return (
        <Wrapper>
            <LocationSearch onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)} placeholder="eg. Los Angeles"/>
            <City>{weather.address}</City>
            <TodayDescription>{weather.days ? weather.days[0].conditions : null}</TodayDescription>
            <TodayDegree>{weather.days ? Math.floor(weather.days[0].tempmax) : null}<FahrenheitIcon/></TodayDegree>

            {weather
              ? ((weather.days) ?? []).slice(1, 7).map((day:Day) => {
                  const Datee = new Date(day.datetime)
                  return (
                    <DayCard key={day.datetime}>
                        <DayName>{Datee.toLocaleString('en-US', {
                          weekday: 'long'
                        })}</DayName>
                        <Details>
                        <Degree>
                           <Value>{Math.floor(day.tempmax)}</Value>
                           <FahrenheitIcon/>
                        </Degree>
                        <WeatherDraw alt="icon" src={require(`../../../../assets/Weather-Icons/${day.icon}.png`)}/>
                        </Details>

                    </DayCard>

                  )
                })
              : null}
        </Wrapper>
  )
}

export default Weather
