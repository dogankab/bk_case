import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabFirstScreen from './Screens/TabFirstPage'
import TabSecondScreen from './Screens/TabSecondPage'
import TabThirdScreen from './Screens/TabThirdPage'

import TitlePageScreen from './Screens/TitlePage'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator

            tabBarOptions={{
                activeTintColor: 'orange',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen options={{title: 'TAB 1',}} name="StackNavigator" component={StackNavigator}/>
            <Tab.Screen options={{title: 'TAB 2'}} name="TabSecond" component={TabSecondScreen}/>
            <Tab.Screen options={{title: 'TAB 3'}} name="TabThird" component={TabThirdScreen}/>
        </Tab.Navigator>
    )

}
const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerTitle: 'Welcome User'}} name="TabFirst" component={TabFirstScreen}/>
            <Stack.Screen name={"TitlePage"} component={TitlePageScreen}/>
        </Stack.Navigator>
    );
}


export default function App() {
    return (
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    );
}
