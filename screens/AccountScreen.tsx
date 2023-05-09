import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const AccountScreen = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            <TextInput />
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({

    root: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25
    }
})