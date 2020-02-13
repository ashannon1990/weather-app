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
  Button,
  PermissionsAndroid
} from 'react-native';

import GetWeather from './components/GetWeather';
import FiveDayForecast from './components/FiveDayForecast'
import axios from 'axios';
import CurrentWeather from './components/CurrentWeather';
import SnarkyMessage from './components/SnarkyMessage';

// async function requestLocationPermission() {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: 'Gimme your position',
//         message: "I get your location, or you don't get the weather",
//         buttonNeutral: "Not now",
//         buttonNegative: 'No way!',
//         buttonPositive: 'Sounds fair',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log("I know where you live");
//     } else {
//       console.log("You pansy")
//     }
//   } catch (err) {
//     console.warn(err)
//   }
// }


const apiKey = ''

const styles = {
  body: {
    backgroundColor: '#61dafb',
    height: '100%',
    alignItems: 'center'
  }
}

const App = () => {

  // state for current weather
  const [location, setLocation] = useState({
    lat: null,
    long: null
  })
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




  // const getLocation = () => {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     requestLocationPermission();
  //   })
  // }


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
            temp: res.data.main.temp.toFixed(),
            feels_like: res.data.main.feels_like.toFixed(),
            temp_min: res.data.main.temp_min,
            temp_max: res.data.main.temp_max,
            pressure: res.data.main.pressure,
            humidity: res.data.main.humidity
          },
          wind: {
            speed: res.data.wind.speed.toFixed(1),
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

  const getFiveDay = () => {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Jacksonville&units=imperial&cnt=5&appid=' + apiKey)
    .then((res) => {
      console.log(res.data)
    })
  }


  return (
    <View style={styles.body}>
      <GetWeather
        clicked={getCurrentWeather}
      />
      <SnarkyMessage 
        currentCondition={currentWeather.weather.main}
      />
      <CurrentWeather
        city={currentWeather.name}
        currentTemp={currentWeather.main.temp}
        icon={currentWeather.weather.icon}
        main={currentWeather.weather.main}
        wind={currentWeather.wind.speed}
      />
      <FiveDayForecast 
        icon={currentWeather.weather.icon}
        day='Thursday'
        condition={currentWeather.weather.main}
        maxTemp={currentWeather.main.temp_max}
        minTemp={currentWeather.main.temp_min}
      />
    </ View>
  );
};


export default App;
