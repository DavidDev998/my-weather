import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import * as Location from 'expo-location';
import weatherService from '../../services/weather';
import LinearGradient from 'react-native-linear-gradient';
import Clear from '../../../assets/images/clear.svg'

import styles from './styles';

const backgrounds:any = {
  "day":['#3494ED','#0066FF'],
  "evening":['#F6C441','#0066FF'],
  "night":['#010446','#0066FF'],
}

const icons = {
  'sunny':'sunny.svg',
  'clear':'clear.svg',
  'cloudy':'cloudy.svg',
  'rain':'rain.svg',
  'thunder':'thunder.svg',
  'heavyRain':'heavyRain.svg',

  'nightCloudy':'nightCloudy.svg',
  'nigth':'night.svg',
  'clearNight':'clearNight.svg',
  'nightRain':'nightRain.svg'
}

export default function Home() {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const [hourOfDay, setHourOfDay] = useState('day');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('A permissão para acessar a localização foi negada');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let weatherData = await weatherService.currentWeather(location.coords.latitude,location.coords.longitude);
      setWeather(weatherData)

      const now = new Date().getHours();
      const sunset = new Date(weatherData.sys.sunset * 1000).getHours()
      const evening = 17
      const sunrise = new Date(weatherData.sys.sunrise * 1000).getHours()
      
      if(now > sunrise && now < evening){
        //Dia
        setHourOfDay('day')
      }else if(now > evening && now < sunset){
        //Tarde
        setHourOfDay('evening')
      }else{
        //Noite
        setHourOfDay('night')
      }
      
    })();
  }, []);

  let locationText = 'Waiting..';
  if (errorMsg) {
    locationText = errorMsg;
  } else if (location) {
    locationText = JSON.stringify(location);
  }

  let weatherText = `Waiting...`
  if(weather){
    weatherText = JSON.stringify(weather)
  }

  return (
    <LinearGradient
      colors={backgrounds[hourOfDay]}
      style={styles.container}
      start={{x:0,y:0}}
      end={{x:1,y:1}}
    >
      <Text style={styles.text}>Location</Text>
      <Text style={styles.text}>{locationText}</Text>
    <Clear/>
      <Text style={styles.text2}>Clima</Text>
      <Text style={styles.text}>{weatherText}</Text>
      <Text>{backgrounds[hourOfDay]}</Text>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}
 