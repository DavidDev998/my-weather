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
    'Clear':<Clear  height={styles.image.height} width={styles.image.width}/>,
    'Clouds':<Sunny  height={styles.image.height} width={styles.image.width}/>,
    'Mist':<Cloudy   height={styles.image.height} width={styles.image.width}/>,
    'Smoke':<Cloudy   height={styles.image.height} width={styles.image.width}/>,
    'Haze':<Cloudy   height={styles.image.height} width={styles.image.width}/>,
    'Dust':<Cloudy   height={styles.image.height} width={styles.image.width}/>,
    'Fog':<Cloudy   height={styles.image.height} width={styles.image.width}/>,
    'Sand':<Cloudy   height={styles.image.height} width={styles.image.width}/>,
    'Ash':<Cloudy   height={styles.image.height} width={styles.image.width}/>,
    'Rain':<Rain   height={styles.image.height} width={styles.image.width}/>,
    'Snow':<Rain   height={styles.image.height} width={styles.image.width}/>,
    'Drizzie':<Rain   height={styles.image.height} width={styles.image.width}/>,
    'thunder':<Thunder   height={styles.image.height} width={styles.image.width}/>,
    'Thunderstorm':<HeavyRain  height={styles.image.height} width={styles.image.width}/>,
    'Squall':<HeavyRain  height={styles.image.height} width={styles.image.width}/>,
    'Tornado':<HeavyRain  height={styles.image.height} width={styles.image.width}/>,
    '':<Cloudy   height={styles.image.height} width={styles.image.width}/>
  }
  const nightImages:any = {
    'Clear':<ClearNight height={styles.image.height} width={styles.image.width}/>,
    'Clouds':<Night  height={styles.image.height} width={styles.image.width}/>,
    'Mist':<CloudyNight   height={styles.image.height} width={styles.image.width}/>,
    'Smoke':<CloudyNight   height={styles.image.height} width={styles.image.width}/>,
    'Haze':<CloudyNight   height={styles.image.height} width={styles.image.width}/>,
    'Dust':<CloudyNight   height={styles.image.height} width={styles.image.width}/>,
    'Fog':<CloudyNight   height={styles.image.height} width={styles.image.width}/>,
    'Sand':<CloudyNight   height={styles.image.height} width={styles.image.width}/>,
    'Ash':<CloudyNight   height={styles.image.height} width={styles.image.width}/>,
    'Rain':<RainNight   height={styles.image.height} width={styles.image.width}/>,
    'Snow':<RainNight   height={styles.image.height} width={styles.image.width}/>,
    'Drizzie':<RainNight   height={styles.image.height} width={styles.image.width}/>,
    'thunder':<RainNight   height={styles.image.height} width={styles.image.width}/>,
    'Thunderstorm':<RainNight  height={styles.image.height} width={styles.image.width}/>,
    'Squall':<RainNight  height={styles.image.height} width={styles.image.width}/>,
    'Tornado':<RainNight  height={styles.image.height} width={styles.image.width}/>,
    '':<CloudyNight  height={styles.image.height} width={styles.image.width}/>
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
 