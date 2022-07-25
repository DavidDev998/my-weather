import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        position:'relative',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop:100,
        paddingHorizontal:20
    },
    reload:{
        position:'absolute',
        top:60,
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
        fontSize:68,
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
