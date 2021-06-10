import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen, DetailsScreen} from "./src/screens/index";

const {Navigator,Screen} = createStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#009387'
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
                <Screen name='Home' component={HomeScreen}
                        // options={{ title: 'Main'}}
                />
                <Screen name='Details' component={DetailsScreen} />
            </Navigator>
        </NavigationContainer>
    );
}