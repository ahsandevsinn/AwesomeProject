import React, { useEffect, useState } from 'react';
import { View, Text, TextInputComponent, TextInput, Button } from 'react-native';
import appStyles from './styles/style';
// import appStyles from './styles/style';

function App() {
const [data,setData] = useState(undefined);

const getApi = async ()=>{
  const url = "https://jsonplaceholder.typicode.com/posts";
  let result = await fetch(url);
  result = await result.json();
  setData(result);
  
}
  useEffect(()=>{
   getApi();
  },[])

  return (
    <View style={appStyles.View}>
      <Text style={appStyles.textBox}>Fetch API</Text>
     data ?  <Text style={appStyles.textBox}>{data[0].id}</Text> : null;
     data ?  <Text style={appStyles.textBox}>{data[0].title}</Text> : null;
     data ?  <Text style={appStyles.textBox}>{data[0].body}</Text> : null;

    
    </View>
  );
}


export default App;
