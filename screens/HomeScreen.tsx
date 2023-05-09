import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import IconDetail from '../components/UI/IconDetail'
import BottomSheets from '../components/UI/BottonSheet'

const HomeScreen: React.FC<{ navigation: NavigationProp<ParamListBase> }> = (prop) => {
    prop.navigation.setOptions({
        headerRight: () => {
            return <IconDetail icon={'person'} color={'black'} onPress={() => { }} />

        }
    })
    return (
        <View style={styles.root}>
            <View style={styles.searchSection}>

                <IconDetail icon={"ios-search"} color='black' onPress={() => { }} />
                <TextInput placeholder='Search any Receipe' style={styles.input} />
            </View>
            <Text style={styles.subTitle}>CHOOSE WHAT TO {"\n"}<Text style={{ color: '#337837' }}>COOK</Text> TODAY</Text>
            {/* <View> */}
            <BottomSheets />
            {/* </View> */}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    inpudt: {
        borderWidth: 1,
        paddingLeft: 40,
        borderRadius: 10,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        // paddingLeft: 40,
        borderRadius: 10,
        marginHorizontal: 30,
        marginTop: 5
    },
    input: {
        flex: 1,
        // paddingTop: 10,
        // paddingRight: 10,
        // paddingBottom: 10,
        // paddingLeft: 0,
        color: '#424242',

    },
    subTitle: {
        marginTop: 20,
        fontSize: 33,
        color: '#7E7171',
        fontWeight: '800',
        textTransform: 'uppercase',
        marginLeft: 25,
        fontFamily: 'Montserrat-Regular',

    }
})