
import React from 'react';
import { View, Text, Button } from 'react-native';
import { UserData } from './components/app_components';

const Data = (value)=>{
  return console.warn(value)
}

function App() {
  return (
    <View >
      <Button title='Press Here' onPress={()=>{Data("Hello Ahsan How Are you")}}> </Button>
    </View>

  )

}



export default App;
