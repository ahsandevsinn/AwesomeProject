
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import appStyles from './styles/style';

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
      <Text style={appStyles.textBox}>{Name.name}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  textBox : [
    {
      paddingTop: 10,
      fontSize: 20,
      color: "blue",

    }
  ]
})


export default App;
