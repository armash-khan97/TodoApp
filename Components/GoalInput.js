import { StyleSheet, TextInput, View, Button, Modal } from 'react-native'
import React, { useState } from 'react'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalEnterHandle = (enteredText) => {
        setEnteredGoal(enteredText)
    };

    const addGoalHandle = () => {
        props.onadd();
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Enter your Task' onChangeText={goalEnterHandle}
                    value={enteredGoal}
                />
                <View style={styles.poition}>
                    <View style={styles.btn}>
                        <Button title='CANCEL' color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.btn}>
                        <Button title='Add' onPress={addGoalHandle} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    input: {
        width: "80%",
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    poition: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    btn: {
        width: "40%"
    }
})