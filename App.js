import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';


const App = () => {


  return (
    <View style={styles.container}>
      <View style={styles.con}>
        <TextInput style={styles.input}
        />
        <Button title='Add' style={styles.btn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    backgroundColor: "#fff",
  },
  con: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    marginVertical:29
  },
  btn: {
    // borderRadius:10,

  }
});

export default App;
