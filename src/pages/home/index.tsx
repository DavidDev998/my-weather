import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View,SafeAreaView, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import LinearGradient from 'react-native-linear-gradient';
import Geolocation from '@react-native-community/geolocation';

import hourOfDay from '../../types/hourOfDay';

import weatherService from '../../services/weather';
import WeatherImage from '../../components/WeatherImage'
import getCountryByPrefix from '../../utils/getCountry';
import MiniCard from '../../components/MiniCard';

import LocationIcon from '../../../assets/images/location.svg';
import ReloadIcon from '../../../assets/icons/reload.svg';

import styles from './styles';

const backgrounds:any = {
  "day":['#3494ED','#0066FF'],
  "evening":['#F6C441','#0066FF'],
  "night":['#010446','#0066FF'],
}

const weathers:any = {
  "Thunderstorm":"Tempestade",
  "Drizzie":"Chuva Leve",
  "Rain":"Chuva",
  "Snow":"Neve",
  "Clear":"Céu Limpo",
  "Clouds":"Nublado",
  "Mist":"Névoa",
  "Smoke":"Fumaça",
  "Haze":"Neblina",
  "Dust":"Poeira",
  "Fog":"Nevoeiro",
  "Sand":"Areia",
  "Ash":"Cinzas",
  "Squall":"Rajadas",
  "Tornado":"Tornado",
}

export default function Home() {
  const [weather, setWeather]:any = useState({});
  const [hourOfDay, setHourOfDay] = useState<hourOfDay>('day');
  const [errorMsg, setErrorMsg] = useState('');
  const [reload,setReload] = useState(false);
  const [enableHighAccuracy,setEnableHighAccuracy] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('A permissão para acessar a localização foi negada, por favor, permita em suas configurações para usar o app!');
        return;
      }
      
      let location = {} 
      Geolocation.getCurrentPosition(async info => {
        let location = info
        let weatherData = await weatherService.currentWeather(location.coords.latitude,location.coords.longitude);
        setWeather(weatherData)

        const now = new Date().getHours();
        const sunset = new Date(weatherData.sys.sunset * 1000).getHours()
        const evening = 17
        const sunrise = new Date(weatherData.sys.sunrise * 1000).getHours()
        if(now >= sunrise && now < evening){
          //Dia
          setHourOfDay('day')
        }else if(now >= evening && now < sunset){
          //Tarde
          setHourOfDay('evening')
        }else{
          //Noite
          setHourOfDay('night')
        }
        setReload(false)
      },err => {
        console.log(err)
        setEnableHighAccuracy(false);
        setReload(true)
      },
      {enableHighAccuracy:enableHighAccuracy,timeout:2000});
      
    })();
  }, [,reload]);

  return (
      <LinearGradient
        colors={backgrounds[hourOfDay]}
        style={styles.container}
        start={{x:0,y:0}}
        end={{x:1,y:1}}
      >
        {
          weather.weather && !reload && !errorMsg ?
          (
            <>
              <Pressable onPress={()=>{setReload(true)}} style={styles.reload}>
                <ReloadIcon/>
              </Pressable>
              <View style={styles.top}>
                <View style={styles.nameContainer}>
                  <LocationIcon style={styles.locationIcon}/>
                  <Text style={styles.city}>{weather.name ?? ""}</Text>
                </View>
                <Text style={styles.country}>{getCountryByPrefix(weather?.sys?.country ?? "")}</Text>
                <View style={styles.latLongContainer}>
                  <Text style={styles.lat}>lat:{weather?.coord?.lat ?? ""}</Text>
                  <Text style={styles.long}>long:{weather?.coord?.lon ?? ""}</Text>
                </View>
              </View>
              <View style={styles.middle}>
                <WeatherImage type={weather?.weather ? weather?.weather[0]?.main : ""} hourOfDay={hourOfDay}/>

                <View style={styles.tempContainer}>
                  <Text style={styles.temp}>{parseInt(weather?.main?.temp)}</Text>
                  <Text style={styles.celciusSymbol}>°C</Text>
                </View>
                <Text style={styles.weatherDescription}>{weathers[weather?.weather ? weather?.weather[0]?.main : ""]}</Text>
              </View>
              <View style={styles.divisorbar}></View>
              <View style={styles.bottom}>
                <View style={styles.cards}>
                  <MiniCard icon='temp' name='Minima' suffix='°C' value={parseInt(weather?.main?.temp_min ?? 0)}/>
                  <MiniCard icon='temp' name='Sensação' suffix='°C' value={parseInt(weather?.main?.feels_like ?? 0)}/>
                  <MiniCard icon='temp' name='Máxima' suffix='°C' value={parseInt(weather?.main?.temp_max ?? 0)}/>

                  <MiniCard icon='humidity' name='Umidade' suffix='%' value={parseInt(weather?.main?.humidity ?? 0)}/>
                  <MiniCard icon='temp' name='Vento' suffix='km/h' value={parseInt(weather?.main?.temp_max ?? 0)}/>
                  <MiniCard icon='temp' name='Pressão' suffix='hPa' value={parseInt(weather?.main?.pressure ?? 0)}/>
                </View>
              </View>
             

              
              


              
              
              <StatusBar style='light' />
            </>
          ) : 
          (
            errorMsg ?
            (
              <Text style={styles.errorText}>{errorMsg}</Text>
            ) : (
              <ActivityIndicator size="large" />
            )
          )
        }
      </LinearGradient>
  );
}
 