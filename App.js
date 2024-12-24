import React, { useState } from 'react';
import { View, Text, TextInputComponent, TextInput, Button } from 'react-native';
import appStyles from './styles/style';
// import appStyles from './styles/style';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={appStyles.View}>
      <Text style={appStyles.textBox}>Login Form</Text>
      <TextInput style={appStyles.textInput} placeholder='Enter user name' onChangeText={(text)=>setName(text)} value={name}></TextInput>
      <TextInput style={appStyles.textInput} placeholder='Enter user email' onChangeText={(text)=>setEmail(text)} value={email}></TextInput>
      <TextInput style={appStyles.textInput} placeholder='Enter user password' onChangeText={(text)=>setPassword(text)} value={password}></TextInput>
      <View style={{ width: 200, borderRadius: 30, padding: 10 }}>

        <Button title='Save Data' onPress={()=>{
        
          console.table([name,email,password]);
          
        }}></Button>
      </View>
      <View style={{ width: 200, borderRadius: 30, padding: 5 }}>

        <Button title='Clear Data' onPress={()=>{
          setEmail('');
          setName('');
          setPassword('');
        }}></Button>
      </View>
    </View>
  );
}


export default App;
