import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import {createStackNavigator} from "@react-navigation/stack";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import ProfileScreen from "./ProfileScreen";
import ExploreScreen from "./ExploreScreen";


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


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
            backgroundColor: '#1f65ff'
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name='Details' component={DetailsScreen}
                             options={({navigation}) => ({
                                 headerLeft: () => (
                                     <Icon.Button name="ios-menu" backgroundColor='#1f65ff' size={25}
                                                  onPress={() => navigation.openDrawer()}/>
                                 )
                             })}
        />
    </DetailsStack.Navigator>
);

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#FFF"
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-home" color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen
            name="Notification"
            component={DetailsStackScreen}
            options={{
                tabBarLabel: 'Updates',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-notifications" color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#694fad',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-person" color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
                tabBarLabel: 'Explore',
                tabBarColor: '#D02860',
                tabBarIcon: ({color}) => (
                    <Icon name="ios-aperture" color={color} size={26}/>
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;