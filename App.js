/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  PermissionsAndroid
} from 'react-native';
import moment from 'moment';
import axios from 'axios';

import DailyForecast from './components/DailyForecast';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
// import SnarkyMessage from './components/SnarkyMessage';


const apiKey = '';

const styles = {
  body: {
    padding: 10,
    backgroundColor: '#61dafb',
    height: '100%',
    alignItems: 'center',
    overflow: 'scroll'
  }
}

const App = () => {

  const [location, setLocation] = useState({
    lat: null,
    long: null
  })
  // state for current weather
  const [weather, setWeather] = useState({
    currentWeather: {
      time: null,
      summary: '',
      icon: '',
      precipIntensity: null,
      precipProbability: null,
      temperature: null,
      feelsLike: null,
      dewPoint: null,
      humidity: null,
      pressure: null,
      windSpeed: null,
      windDirection: null,
      cloudCover: null
    },
    hourlyForecast: {
      data: [{
        time: null,
        summary: '',
        icon: '',
        precipProbability: null,
        temperature: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        precipProbability: null,
        temperature: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        precipProbability: null,
        temperature: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        precipProbability: null,
        temperature: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        precipProbability: null,
        temperature: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        precipProbability: null,
        temperature: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        precipProbability: null,
        temperature: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        precipProbability: null,
        temperature: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        precipProbability: null,
        temperature: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        precipProbability: null,
        temperature: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        precipProbability: null,
        temperature: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        precipProbability: null,
        temperature: null
      }]
    },
    dailyForecast: {
      summary: '',
      icon: '',
      data: [{
        time: null,
        summary: '',
        icon: '',
        sunrise: null,
        sunset: null,
        precipProbability: null,
        tempMax: null,
        tempMin: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        sunrise: null,
        sunset: null,
        precipProbability: null,
        tempMax: null,
        tempMin: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        sunrise: null,
        sunset: null,
        precipProbability: null,
        tempMax: null,
        tempMin: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        sunrise: null,
        sunset: null,
        precipProbability: null,
        tempMax: null,
        tempMin: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        sunrise: null,
        sunset: null,
        precipProbability: null,
        tempMax: null,
        tempMin: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        sunrise: null,
        sunset: null,
        precipProbability: null,
        tempMax: null,
        tempMin: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        sunrise: null,
        sunset: null,
        precipProbability: null,
        tempMax: null,
        tempMin: null
      },
      {
        time: null,
        summary: '',
        icon: '',
        sunrise: null,
        sunset: null,
        precipProbability: null,
        tempMax: null,
        tempMin: null
      }]
    }
  })


  const getWeather = () => {
    axios.get('https://api.darksky.net/forecast/' + apiKey + '/30.332184,-81.655647?exclude=minutely') // API call to get current conditions
      .then(res => {
        console.log(res)
        setWeather({
          ...weather,
          currentWeather: {
            time: moment(res.data.currently.time),
            summary: res.data.currently.summary,
            icon: res.data.currently.icon,
            precipIntensity: res.data.currently.precipIntensity,
            precipProbability: res.data.currently.precipProbability,
            temperature: res.data.currently.temperature.toFixed(),
            feelsLike: res.data.currently.apparentTemperature,
            dewPoint: res.data.currently.dewPoint,
            humidity: res.data.currently.humidity,
            pressure: res.data.currently.pressure,
            windSpeed: res.data.currently.windSpeed,
            windDirection: res.data.currently.windBearing,
            cloudCover: res.data.currently.cloudCover
          },
          hourlyForecast: {
            data: [{
              time: moment(res.data.hourly.data[0].time * 1000).format('LT'),
              summary: res.data.hourly.data[0].summary,
              icon: res.data.hourly.data[0].icon,
              precipProbability: (res.data.hourly.data[0].precipProbability * 100).toFixed(),
              temperature: res.data.hourly.data[0].temperature.toFixed()
            },
            {
              time: moment(res.data.hourly.data[1].time * 1000).format('LT'),
              summary: res.data.hourly.data[1].summary,
              icon: res.data.hourly.data[1].icon,
              precipProbability: (res.data.hourly.data[1].precipProbability * 100).toFixed(),
              temperature: res.data.hourly.data[1].temperature.toFixed()
            },
            {
              time: moment(res.data.hourly.data[2].time * 1000).format('LT'),
              summary: res.data.hourly.data[2].summary,
              icon: res.data.hourly.data[2].icon,
              precipProbability: (res.data.hourly.data[2].precipProbability * 100).toFixed(),
              temperature: res.data.hourly.data[2].temperature.toFixed()
            },
            {
              time: moment(res.data.hourly.data[3].time * 1000).format('LT'),
              summary: res.data.hourly.data[3].summary,
              icon: res.data.hourly.data[3].icon,
              precipProbability: (res.data.hourly.data[3].precipProbability * 100).toFixed(),
              temperature: res.data.hourly.data[3].temperature.toFixed()
            },
            {
              time: moment(res.data.hourly.data[4].time * 1000).format('LT'),
              summary: res.data.hourly.data[4].summary,
              icon: res.data.hourly.data[4].icon,
              precipProbability: (res.data.hourly.data[4].precipProbability * 100).toFixed(),
              temperature: res.data.hourly.data[4].temperature.toFixed()
            },
            {
              time: moment(res.data.hourly.data[5].time * 1000).format('LT'),
              summary: res.data.hourly.data[5].summary,
              icon: res.data.hourly.data[5].icon,
              precipProbability: (res.data.hourly.data[5].precipProbability * 100).toFixed(),
              temperature: res.data.hourly.data[5].temperature.toFixed()
            },
            {
              time: moment(res.data.hourly.data[6].time * 1000).format('LT'),
              summary: res.data.hourly.data[6].summary,
              icon: res.data.hourly.data[6].icon,
              precipProbability: (res.data.hourly.data[6].precipProbability * 100).toFixed(),
              temperature: res.data.hourly.data[6].temperature.toFixed()
            },
            {
              time: moment(res.data.hourly.data[7].time * 1000).format('LT'),
              summary: res.data.hourly.data[7].summary,
              icon: res.data.hourly.data[7].icon,
              precipProbability: (res.data.hourly.data[7].precipProbability * 100).toFixed(),
              temperature: res.data.hourly.data[7].temperature.toFixed()
            },
            {
              time: moment(res.data.hourly.data[8].time * 1000).format('LT'),
              summary: res.data.hourly.data[8].summary,
              icon: res.data.hourly.data[8].icon,
              precipProbability: (res.data.hourly.data[8].precipProbability * 100).toFixed(),
              temperature: res.data.hourly.data[8].temperature.toFixed()
            },
            {
              time: moment(res.data.hourly.data[9].time * 1000).format('LT'),
              summary: res.data.hourly.data[9].summary,
              icon: res.data.hourly.data[9].icon,
              precipProbability: (res.data.hourly.data[9].precipProbability * 100).toFixed(),
              temperature: res.data.hourly.data[9].temperature.toFixed()
            },
            {
              time: moment(res.data.hourly.data[10].time * 1000).format('LT'),
              summary: res.data.hourly.data[10].summary,
              icon: res.data.hourly.data[10].icon,
              precipProbability: (res.data.hourly.data[10].precipProbability * 100).toFixed(),
              temperature: res.data.hourly.data[10].temperature.toFixed()
            },
            {
              time: moment(res.data.hourly.data[11].time * 1000).format('LT'),
              summary: res.data.hourly.data[11].summary,
              icon: res.data.hourly.data[11].icon,
              precipProbability: (res.data.hourly.data[11].precipProbability * 100).toFixed(),
              temperature: res.data.hourly.data[11].temperature.toFixed()
            }]
          },
          dailyForecast: {
            summary: res.data.daily.summary,
            icon: res.data.daily.icon,
            data: [{
              time: moment(res.data.daily.data[0].time * 1000).format('ddd, MMM Do'),
              summary: res.data.daily.data[0].summary,
              icon: res.data.daily.data[0].icon,
              sunrise: res.data.daily.data[0].sunrise,
              sunset: res.data.daily.data[0].sunset,
              precipProbability: res.data.daily.data[0].precipProbability,
              tempMax: res.data.daily.data[0].temperatureMax.toFixed(),
              tempMin: res.data.daily.data[0].temperatureMin.toFixed()
            },
            {
              time: moment(res.data.daily.data[1].time * 1000).format('ddd, MMM Do'),
              summary: res.data.daily.data[1].summary,
              icon: res.data.daily.data[1].icon,
              sunrise: res.data.daily.data[1].sunrise,
              sunset: res.data.daily.data[1].sunset,
              precipProbability: res.data.daily.data[1].precipProbability,
              tempMax: res.data.daily.data[1].temperatureMax.toFixed(),
              tempMin: res.data.daily.data[1].temperatureMin.toFixed()
            },
            {
              time: moment(res.data.daily.data[2].time * 1000).format('ddd, MMM Do'),
              summary: res.data.daily.data[2].summary,
              icon: res.data.daily.data[2].icon,
              sunrise: res.data.daily.data[2].sunrise,
              sunset: res.data.daily.data[2].sunset,
              precipProbability: res.data.daily.data[2].precipProbability,
              tempMax: res.data.daily.data[2].temperatureMax.toFixed(),
              tempMin: res.data.daily.data[2].temperatureMin.toFixed()
            },
            {
              time: moment(res.data.daily.data[3].time * 1000).format('ddd, MMM Do'),
              summary: res.data.daily.data[3].summary,
              icon: res.data.daily.data[3].icon,
              sunrise: res.data.daily.data[3].sunrise,
              sunset: res.data.daily.data[3].sunset,
              precipProbability: res.data.daily.data[3].precipProbability,
              tempMax: res.data.daily.data[3].temperatureMax.toFixed(),
              tempMin: res.data.daily.data[3].temperatureMin.toFixed()
            },
            {
              time: moment(res.data.daily.data[4].time * 1000).format('ddd, MMM Do'),
              summary: res.data.daily.data[4].summary,
              icon: res.data.daily.data[4].icon,
              sunrise: res.data.daily.data[4].sunrise,
              sunset: res.data.daily.data[4].sunset,
              precipProbability: res.data.daily.data[4].precipProbability,
              tempMax: res.data.daily.data[4].temperatureMax.toFixed(),
              tempMin: res.data.daily.data[4].temperatureMin.toFixed()
            },
            {
              time: moment(res.data.daily.data[5].time * 1000).format('ddd, MMM Do'),
              summary: res.data.daily.data[5].summary,
              icon: res.data.daily.data[5].icon,
              sunrise: res.data.daily.data[5].sunrise,
              sunset: res.data.daily.data[5].sunset,
              precipProbability: res.data.daily.data[5].precipProbability,
              tempMax: res.data.daily.data[5].temperatureMax.toFixed(),
              tempMin: res.data.daily.data[5].temperatureMin.toFixed()
            },
            {
              time: moment(res.data.daily.data[6].time * 1000).format('ddd, MMM Do'),
              summary: res.data.daily.data[6].summary,
              icon: res.data.daily.data[6].icon,
              sunrise: res.data.daily.data[6].sunrise,
              sunset: res.data.daily.data[6].sunset,
              precipProbability: res.data.daily.data[6].precipProbability,
              tempMax: res.data.daily.data[6].temperatureMax.toFixed(),
              tempMin: res.data.daily.data[6].temperatureMin.toFixed()
            },
            {
              time: moment(res.data.daily.data[7].time * 1000).format('ddd, MMM Do'),
              summary: res.data.daily.data[7].summary,
              icon: res.data.daily.data[7].icon,
              sunrise: res.data.daily.data[7].sunrise,
              sunset: res.data.daily.data[7].sunset,
              precipProbability: res.data.daily.data[7].precipProbability,
              tempMax: res.data.daily.data[7].temperatureMax.toFixed(),
              tempMin: res.data.daily.data[7].temperatureMin.toFixed()
            }]
          }
        })
      })
  }

  useEffect(() => {
    getWeather();
  }, [])


  return (
    <ScrollView>
      <View style={styles.body}>
        {/* <SnarkyMessage
        currentCondition={currentWeather.weather.main}
      /> */}
        <CurrentWeather
          city="Jacksonville"
          currentTemp={weather.currentWeather.temperature}
          // icon={weather.currentWeather.icon}
          summary={weather.currentWeather.summary}
          windSpeed={weather.currentWeather.windSpeed}
        />
        {weather.dailyForecast.data.map((data, key) => {
          if (data.tempMax != null) {
            return (
              <DailyForecast
                key={data.time}
                // icon={data.icon}
                day={data.time}
                maxTemp={data.tempMax}
                minTemp={data.tempMin}
              />
            )
          }
        })}
        {weather.hourlyForecast.data.map((data, key) => {
          if (data.temperature != null) {
            return (
              <HourlyForecast
                key={data.time}
                // icon={data.icon}
                time={data.time}
                temp={data.temperature}
                precip={data.precipProbability}
              />
            )
          }
        })}
      </ View>
    </ ScrollView>
  );
};


export default App;
