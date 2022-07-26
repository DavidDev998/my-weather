import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const height = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
        position:'relative',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop:'10%',
        paddingHorizontal:20
    },
    top:{
        flex:.2,
        justifyContent:'center',
        alignItems:'center'
    },
    middle:{
        flex:height < 700 ? .3 : .4,
        justifyContent:'center',
        alignItems:'center'

    },
    bottom:{
        flex:.3

    },
    reload:{
        position:'absolute',
        top:'5%',
        left:10
    },
    nameContainer:{
        position:"relative",
        width:"auto",
        paddingHorizontal:30
    },
    city: {
        color:"white",
        fontSize:36
    },
    locationIcon:{
        position:"absolute",
        top:'25%',
    },
    country:{
        marginTop:5,
        color:"white",
        fontSize:20
    },

    latLongContainer:{
        width:"60%",
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    lat:{
        color:"white",
        fontSize:17,
    },
    long:{
        color:"white",
        fontSize:17,
    },
    tempContainer:{
        position:'relative',
        width:'auto',
        height:'auto',
        alignItems:'center',
        paddingHorizontal:10,
    },
    temp:{
        color:'white',
        fontSize:50,
        fontWeight:'400',
        padding:5
    },
    celciusSymbol:{
        position:'absolute',
        top:0,
        right:0,
        color:'white',
        fontSize:20
    },
    weatherDescription:{
        color:'white',
        fontSize:20
    },
    divisorbar:{
        width:'100%',
        borderBottomWidth:2,
        borderColor:'white',
        marginVertical:30
    },

    cards:{
        width:'100%',
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    errorText:{
        flex:1,
        fontSize:30,
        textAlign:'center',
        color:'white',
        letterSpacing:2,
    }
})
