import axios from 'axios';

const api_key = '9914501172999331b7778b1ad5c06ce9'

const weather = {
    async currentWeather(lat:number,long:number){
      let {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=metric`)
      return data
    }
}

export default weather