import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList, Button } from 'react-native';
import appStyles from './styles/style';

function App() {
  const [data, setData] = useState([]);

  const getApi = async () => {
    const url = "http://192.168.1.5:3000/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result);

  }

  const userData = {
    "name": "Ahsan Khan",
    "age": 19,
    "email": "ahsankhan@gmail.com"
  }

  // const saveData = async () => {
  //   const url = "http://192.168.1.5:3000/users";
  //   try {
  //     let response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(userData)
  //     },
  //       console.log("API Call initiated"),
  //       if (!response.ok) {
  //               console.error("Failed to save data:", response.statusText);
  //               return;
  //             }else{

  //             }

  //       result = await response.json(),
  //       console.log("result after API call:", result)

  //     );

  //   } catch (error) {
  //     console.error("Error saving data:", error);
  //   }
  // }
  const saveData = async () => {
    const url = "http://192.168.1.5:3000/users";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      console.log("API Call initiated");


      const result = await response.json();
      console.log("result after API call:", result);

    } catch (error) {
      console.error("Error saving data:", error);
    }
  };


  useEffect(() => {
    getApi();
  },)

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.textBox}>POST API</Text>
      {/* <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={appStyles.item}>
            <Text style={appStyles.textBox}>Name: {item.name}</Text>
            <Text style={appStyles.textBox}>Age: {item.age}</Text>
            <Text style={appStyles.textBox}>Email: {item.email}</Text>
          </View>
        )}
      /> */}
      <Button
        title="Click Me"
        onPress={saveData}
      />
    </View>
  );
};




export default App;
