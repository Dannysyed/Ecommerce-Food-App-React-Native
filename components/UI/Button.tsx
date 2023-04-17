import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

const Button: React.FC<PropsWithChildren & { style: object, onPress: () => void }> = (prop) => {
    return (
        <Pressable android_ripple={{ color: 'green' }} onPress={prop.onPress} >
            <View style={[styles.outer, prop.style]}>

                <Text style={styles.content}>{prop.children}</Text>

            </View>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    outer: {
        borderWidth: 1,
        elevation: 5,
        backgroundColor: 'blue',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'



    },
    content: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        zIndex: 1,
        fontWeight: 'bold',
    }
})