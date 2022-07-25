import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const height = Dimensions.get('window').height

export default StyleSheet.create({
    image:{
        width:(height < 700) ? 100 : 190,
        height:(height < 700) ? 100 : 190,

    }
})
