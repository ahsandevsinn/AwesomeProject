
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { UserData } from './components/app_components';

const Data = (value) => {
  return console.warn(value)
}

function App() {
  const [name, setName] = useState("Hello");

  return (
    <View >
      <Button title='Press Here' onPress={() => { setName("Hello Ahsan KKhan")}}> </Button>
       <User name = {name} />
    </View>
  )

}

const User = (Name) => {
  console.log(Name.name)
  return (
    <View >
      <Text style={{ fontSize: 40 }}>{Name.name}</Text>

    </View>
  )
}



export default App;
