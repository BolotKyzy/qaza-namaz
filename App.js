import { View, StyleSheet,SafeAreaView } from 'react-native';
import React from "react";
import NamazList from './components/Namaz-list/Namaz-list';
import Month from './components/month/Month';
import CalendarComponent from './components/Calendar/CalendarComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    // <View style={styles.container}>
    <NavigationContainer>
       <Stack.Navigator initialRouteName='Month'>
        <Stack.Screen name="Calendar" component={CalendarComponent} />
        <Stack.Screen name="NamazList" component={NamazList} /> 
        <Stack.Screen name="Month">
            {props => <Month {...props} year = {'2010'} />}
        </Stack.Screen>

      </Stack.Navigator>
         
      </NavigationContainer>
      // </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20
  },
});
