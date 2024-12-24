import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
    textBox:
    {
        fontSize: 30,
       paddingTop : 10,
       paddingBottom: 10,
        
        color: "blue",
        textAlign: 'center',

    },
    textInput: {
        height: 50,
        width: 300,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        margin : 5,
        // alignContent:'center',
        // alignItems:'center',
        // justifyContent : 'center',
        


        
    },

    View:{
        alignItems : 'center',
        justifyContent : 'center'

    }



})


export default appStyles;