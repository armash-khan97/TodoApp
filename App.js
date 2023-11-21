import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';


const App = () => {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [coursGoals, setCoursGoal] = useState([])

  const goalEnterHandle = (enteredText) => {
    setEnteredGoal(enteredText)
  };
  const addGoalHandle = () => {
setCoursGoal(currentGoals =>[...currentGoals,enteredGoal])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Enter your Task' onChangeText={goalEnterHandle}
          value={enteredGoal}
        />
        <Button title='Add' onPress={addGoalHandle} />
      </View>
<View>
  {coursGoals.map((goal)=><Text key={goal}>{goal}</Text>)}
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: '#000',
    borderWidth: 1,
    padding: 10

  }
});

export default App;
