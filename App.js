import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons'

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {DetailsScreen, HomeScreen, MainTabScreen} from "./src/screens/index";
import ProfileScreen from "./src/screens/ProfileScreen";

const Drawer = createDrawerNavigator()

export default function App() {

    return (
        <NavigationContainer>
            {/*<Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#009387'
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Details' component={DetailsScreen} />
            </Stack.Navigator>*/}
            <Drawer.Navigator initialRoutename='Home'>
                <Drawer.Screen name='Home' component={MainTabScreen}/>
                {/*<Drawer.Screen name='Details' component={DetailsStackScreen}/>*/}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}