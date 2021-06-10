import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons'

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {DetailsScreen, HomeScreen} from "./src/screens/index";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator()

const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387'
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name='Home' component={HomeScreen}
                          options={({navigation}) => ({
                              headerLeft: () => (
                                  <Icon.Button name="ios-menu" backgroundColor='#009387' size={25}
                                               onPress={() => navigation.openDrawer()}/>
                              )
                          })}
        />
    </HomeStack.Navigator>
);

const DetailsStackScreen = () => (
    <DetailsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387'
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name='Details' component={DetailsScreen}
                             options={({navigation}) => ({
                                 headerLeft: () => (
                                     <Icon.Button name="ios-menu" backgroundColor='#009387' size={25}
                                                  onPress={() => navigation.openDrawer()}/>
                                 )
                             })}
        />
    </DetailsStack.Navigator>
);

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
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={HomeStackScreen}/>
                <Drawer.Screen name='Details' component={DetailsStackScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}