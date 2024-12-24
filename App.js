import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import appStyles from './styles/style';

function App() {
  const [data, setData] = useState([]);

  const getApi = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);

  }
  useEffect(() => {
    getApi();
  }, [])

  return (
    <ScrollView>
      <Text style={appStyles.textBox}>Fetch API</Text>
      {data.length ? data.map((item) => <View>
        <Text style={appStyles.textBox}>Id : {item.id}</Text>
        <Text style={appStyles.textBox}>Title: {item.title}</Text>
        <Text style={appStyles.textBox} >Body : {item.body}</Text>
      </View>
      ) : null}


    </ScrollView>
  );
}


export default App;
