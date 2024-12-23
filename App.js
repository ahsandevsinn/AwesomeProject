
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { UserData } from './components/app_components';

const Data = (value) => {
  return console.warn(value)
}

function App() {
  const [name, setName] = useState("Hello");

  function changeName() {
    setName("Hello Ahsan");
  }
  return (
    <View >
    <Text style={{fontSize:20}}>{name}</Text>
      <Button title='Press Here' onPress={() => { changeName() }}> </Button>
    </View>
  )

}



export default App;
