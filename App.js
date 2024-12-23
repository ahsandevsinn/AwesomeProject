import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import appStyles from './styles/style';

function App() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={appStyles.textInput}
        value={name}
        onChangeText={(text) => setName(text)} 
        placeholder="Enter your name"
        placeholderTextColor="gray"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
  },
});

export default App;
