import React,{useState} from 'react';
import { View } from 'react-native';
import { SvgCssUri } from 'react-native-svg';

import hourOfDayType from '../../types/hourOfDay';

import Clear from '../../../assets/images/clear.svg'
import ClearNight from '../../../assets/images/clearNight.svg'
import Cloudy from '../../../assets/images/cloudy.svg'
import CloudyNight from '../../../assets/images/cloudyNight.svg'
import HeavyRain from '../../../assets/images/heavyRain.svg'
import Night from '../../../assets/images/night.svg'
import Rain from '../../../assets/images/rain.svg'
import RainNight from '../../../assets/images/rainNight.svg'
import Sunny from '../../../assets/images/sunny.svg'
import Thunder from '../../../assets/images/thunder.svg'

import styles from './styles';

const weathers = `
    "sunny"|
    "clear"|
    "cloudy"|
    "rain"|
    "thunder"|
    "heavyRain"|
  
    "nightCloudy"|
    "nigth"|
    "clearNight"|
    "nightRain"
`

type weather = {
    type: "sunny"|"clear"|"cloudy"|"rain"|"thunder"|"heavyRain"|"nightCloudy"|"nigth"|"clearNight"|"nightRain",
    hourOfDay:hourOfDayType
}

const Dayimages:any = {
    'Clear':<Clear width={250}/>,
    'Clouds':<Sunny width={250}/>,
    'Mist':<Cloudy  width={250}/>,
    'Smoke':<Cloudy  width={250}/>,
    'Haze':<Cloudy  width={250}/>,
    'Dust':<Cloudy  width={250}/>,
    'Fog':<Cloudy  width={250}/>,
    'Sand':<Cloudy  width={250}/>,
    'Ash':<Cloudy  width={250}/>,
    'Rain':<Rain  width={250}/>,
    'Snow':<Rain  width={250}/>,
    'Drizzie':<Rain  width={250}/>,
    'thunder':<Thunder  width={250}/>,
    'Thunderstorm':<HeavyRain width={250}/>,
    'Squall':<HeavyRain width={250}/>,
    'Tornado':<HeavyRain width={250}/>,
    '':<Cloudy  width={250}/>
  }
  const nightImages:any = {
    'Clear':<ClearNight height={styles.image.height} width={styles.image.width}/>,
    'Clouds':<Night width={250}/>,
    'Mist':<CloudyNight  width={250}/>,
    'Smoke':<CloudyNight  width={250}/>,
    'Haze':<CloudyNight  width={250}/>,
    'Dust':<CloudyNight  width={250}/>,
    'Fog':<CloudyNight  width={250}/>,
    'Sand':<CloudyNight  width={250}/>,
    'Ash':<CloudyNight  width={250}/>,
    'Rain':<RainNight  width={250}/>,
    'Snow':<RainNight  width={250}/>,
    'Drizzie':<RainNight  width={250}/>,
    'thunder':<RainNight  width={250}/>,
    'Thunderstorm':<RainNight width={250}/>,
    'Squall':<RainNight width={250}/>,
    'Tornado':<RainNight width={250}/>,
    '':<CloudyNight width={250}/>
  }

export default function WeatherImages(props:weather) {

  return (
    <View>
        {props.hourOfDay === "night" ? 
         nightImages[props.type] :
         Dayimages[props.type]
        }
    </View>
  );
}
 