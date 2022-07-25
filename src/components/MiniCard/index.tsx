import React,{useState} from 'react';
import { View, Text } from 'react-native';

import Humidity from '../../../assets/icons/humidity.svg'
import Temp from '../../../assets/icons/temp.svg'
import Wind from '../../../assets/icons/wind.svg'

import styles from './styles'


const icons:any = {
    'humidity':<Humidity style={styles.icon}/>,
    'temp':<Temp style={styles.icon}/>,
    'wind':<Wind style={styles.icon}/>,
  }

type miniCard = {
  name:string,
  value:number,
  suffix:string,
  icon:"humidity" | "temp" | "wind"
}

export default function MiniCard(props:miniCard) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.name}</Text>
      <View style={styles.valueContainer}>
        <Text style={props.value > 999 ? styles.reducedValue : styles.value}>{props.value}</Text>
        <Text style={styles.suffix}>{props.suffix}</Text>
        {icons[props.icon]}
      </View>
    </View>
  );
}
 