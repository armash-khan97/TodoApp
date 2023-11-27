import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem} >
                <Text >{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderColor: '#000'
    }
})