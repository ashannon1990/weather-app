/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import GetWeather from './components/GetWeather';
import currentWeather from './components/CurrentWeather'
import axios from 'axios';
import CurrentWeather from './components/CurrentWeather';



const apiKey = '76716531b6d7d100e1ea7db86d08928b'

const styles = {
  body: {
    backgroundColor: '#61dafb',
    height: '100%'
  }
}

const App = () => {

  // state for current weather
  const [currentWeather, setCurrentWeather] = useState({
    weather: {
      main: '',
      description: '',
      icon: ''
    },
    main: {
      temp: null,
      feels_like: null,
      temp_min: null,
      temp_max: null,
      pressure: null,
      humidity: null
    },
    wind: {
      speed: null,
      deg: null
    },
    clouds: {
      all: null
    },
    sys: {
      country: '',
      sunrise: null,
      sunset: null
    },
    timezone: null,
    id: null,
    name: ''
  })

  const getCurrentWeather = () => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Jacksonville&units=imperial&appid=' + apiKey) // API call to get current conditions
      .then((res) => {
        console.log(res.data)
        setCurrentWeather({  // setting current conditions to state
          weather: {
            main: res.data.weather[0].main,
            description: res.data.weather[0].description,
            icon: res.data.weather[0].icon
          },
          main: {
            temp: res.data.main.temp,
            feels_like: res.data.main.feels_like,
            temp_min: res.data.main.temp_min,
            temp_max: res.data.main.temp_min,
            pressure: res.data.main.pressure,
            humidity: res.data.main.humidity
          },
          wind: {
            speed: res.data.wind.speed,
            deg: res.data.wind.deg
          },
          clouds: {
            all: res.data.clouds.all
          },
          sys: {
            country: res.data.sys.country,
            sunrise: res.data.sys.sunrise,
            sunset: res.data.sys.sunset
          },
          timezone: res.data.timezone,
          id: res.data.id,
          name: res.data.name
        })
        console.log(currentWeather)
      })
  }


  return (
    <View style={styles.body}>
      <GetWeather 
        clicked={getCurrentWeather}
      />
      <CurrentWeather 
        city={currentWeather.name}
        currentTemp={currentWeather.main.temp}
        icon={currentWeather.weather.icon}
        main={currentWeather.weather.main}
        wind={currentWeather.wind.speed}
      />
    </ View>
  );
};


export default App;
