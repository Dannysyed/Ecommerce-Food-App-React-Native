import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Button from '../components/UI/Button'

const LoginScreen = () => {
    return (
        <View style={styles.root}>
            <ImageBackground source={require('../assets/images/bg1.png')} resizeMode='cover' style={styles.ImageBac}>
                <View style={styles.rootContainer}>

                    <Text style={styles.Title}>WELCOME</Text>
                    <View>
                        <Button style={styles.button} onPress={() => { }}>Log in</Button>
                        <Text style={styles.innerText}>Create an account</Text>
                    </View>
                    <View style={styles.icons}>
                        <Ionicons name='airplane' color={'white'} size={25} />
                        <Ionicons name='albums-sharp' color={'white'} size={25} />
                        <Ionicons name='american-football' color={'white'} size={25} />
                    </View>
                </View >
            </ImageBackground>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    rootContainer: {
        // backgroundColor: 'red',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'

    },
    innerText: {
        textAlign: 'center',
        color: 'white',
        marginTop: 6,
        fontWeight: 'bold',
        zIndex: 1000
    },
    ImageBac: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageBackground: {
        opacity: 0.9,

    },
    Title: {
        color: 'white',
        fontSize: 50,
        elevation: 20

    },
    button: {
        borderBottomEndRadius: 20,
        borderTopLeftRadius: 20,

        width: 180,
        height: 50,
        backgroundColor: '#0C5314',
        opacity: 0.8



    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        marginHorizontal: 1,
        gap: 30,
        position: 'relative',
        top: 130


    }


})