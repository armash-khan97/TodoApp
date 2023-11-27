import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ScrollView, FlatList } from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';


const App = () => {

  const [coursGoals, setCoursGoal] = useState([])
  const [ isAddMode ,setIsAddMode] = useState(false)


  const addGoalHandle = GoalTitle => {
    setCoursGoal(currentGoals => [...currentGoals,
    { id: Math.random().toString(), value: GoalTitle }])
    setIsAddMode(false)
  }

  const removeGoalHandle = goalId => {
    setCoursGoal(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancleGoalAdditonHandle = () =>{
    setIsAddMode(false)
  }


  return (
    <View style={styles.screen}>
      <Button title='Add new Gaol' onPress={() => {setIsAddMode(true) }} />
      <GoalInput visible={isAddMode} onadd={addGoalHandle} onCancel={cancleGoalAdditonHandle} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={coursGoals}
        renderItem={itemData => <GoalItem onDelete={removeGoalHandle.bind(this, itemData.item.id)}
          title={itemData.item.value} />}
      />
    </View >
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },


});

export default App;
