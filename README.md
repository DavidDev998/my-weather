# my-weather
Aplicativo em React Native destinado a mostrar os dados de localização e climáticos de onde ele se encontra no momento.

## Stack utilizada
App construido utilizando **REACT NATIVE** em **typescript**(versão 4.7.4) iniciado utilizando expo para facilitar o debug e deploy.

Os dados estão sendo coletados pela API da Open Weather pela rota **Current and forecast weather data**.

## Dependências
As dependencias adicionadas nesse projeto foram:

### Dev dependencies:
 - typescript(4.7.4)
### Dependencies:
 - react-native-svg-transformer
 - react-native-svg
 - react-native-screens
 - react-native-linear-gradient
 - expo
 - react-native-community/geolocation
 
## Inicialização do projeto
Verificar a instalação do [nodeJS](https://nodejs.org/en/download/), do [typescript CLI](https://www.typescriptlang.org/download) e do [expo-cli](https://docs.expo.dev/get-started/installation/) na máquina.
```
  #para iniciar, em seguida siga as instruções no terminal
  npm run start
  ou
  yarn start
  
  #Para iniciar em android
  npm run android
  ou
  yarn android
  
  #Para iniciar em ios
  npm run ios
  ou
  yarn ios
  
  ##O emulador deve estar executando ou o celular conectado##
```
## App

O Aplicativo muda a interface de acordo com a hora do dia:

**Dia**

![image 3 (1)](https://user-images.githubusercontent.com/60728248/181136430-7adec93f-2f5b-4b62-883a-ba477f10e0c1.png)


**Tarde**

![image 1 (1)](https://user-images.githubusercontent.com/60728248/181136416-0311c541-8c98-4c17-a191-ec1183da43d3.png)


**Noite**

![image 2 (1)](https://user-images.githubusercontent.com/60728248/181136423-478288e1-6673-4ac0-9ca1-816b6cc80520.png)




