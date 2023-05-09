import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AccountScreen from './screens/AccountScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconDetail from './components/UI/IconDetail';

export default function App() {
  let Drawer = createDrawerNavigator()
  let Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator();
  let HomeNavigation = () => {
    return (
      <Tab.Navigator>

        <Tab.Screen name='HomeTab' component={HomeScreen} options={{
          headerShown: false, tabBarIcon: () => {
            return <IconDetail color='black' icon={'home'} onPress={() => { }} />
          }, headerStyle: {
            display: 'flex', backgroundColor: 'white'
          },
          headerTitleContainerStyle: { marginLeft: 50, borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 10, width: 200, alignContent: 'center', alignItems: 'center', },
          headerTintColor: 'black',
          headerTitleStyle: { fontWeight: '800' },
          headerRightContainerStyle: { marginRight: 10 }
        }} />
        <Tab.Screen name='UserTab' component={AccountScreen} options={{
          headerShown: false, tabBarIcon: () => {
            return <IconDetail color='black' icon={'person'} onPress={() => { }} />
          }
        }} />
      </Tab.Navigator>
    )
  }
  let DrawerNavigation = () => {
    return (

      <Drawer.Navigator screenOptions={{ sceneContainerStyle: { backgroundColor: 'white' }, }}>
        <Drawer.Screen name='Dali' component={HomeNavigation} options={{
          headerStyle: {
            backgroundColor: 'white'
          },
          headerRight: () => {
            return <IconDetail icon={'person'} color={'black'} onPress={() => { }} />

          },
          headerTitleContainerStyle: { marginLeft: 50, borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 10, width: 200, alignContent: 'center', alignItems: 'center', },
          headerTintColor: 'black',
          headerTitleStyle: { fontWeight: '800' },
          headerRightContainerStyle: { marginRight: 10 }
        }} />
      </Drawer.Navigator>
    )
  }
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='Main' component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name='AccountScreen' component={AccountScreen} />
          <Stack.Screen name='HomeScreen' component={DrawerNavigation} options={{ title: 'Welcome to Dominos', headerStyle: { backgroundColor: '#ccc6' }, headerTintColor: 'white', contentStyle: { backgroundColor: '#ccc0', }, headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
