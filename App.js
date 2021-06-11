import React, {useEffect, useMemo, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import RootStackScreen from "./src/screens/RootStackScreen";
import {ActivityIndicator, View} from "react-native";
import {AuthContext} from "./src/context";
import {BookmarkScreen, MainTabScreen, SettingsScreen, SupportScreen} from "./src/screens";
import {DrawerContent} from "./src/screens/DrawerContent"

const Drawer = createDrawerNavigator()

export default function App() {
    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null
    };

    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'LOGIN':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false
                };
                break;
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false
                };
                break;
            case 'LOGOUT':
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false
                };
                break;
            case 'REGISTER':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false
                };
                break;
            default:
                return prevState;
                break;
        }
    };

    const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

    const authContext = useMemo(() => ({
        signIn: async (foundUser) => {
            const userToken = String(foundUser[0].userToken);
            const userName = foundUser[0].username;
            try {
                await AsyncStorage.setItem('userToken', userToken)
            } catch (e) {
                console.log('Error: ', e);
            }
            dispatch({type: 'LOGIN', id: userName, token: userToken});
        },
        signOut: async () => {
            try {
                await AsyncStorage.removeItem('userToken');
                dispatch({type: 'LOGOUT'});
            } catch (e) {
                console.log('Error: ', e);
            }
        },
        signUp: () => {
            setUserToken('abc');
            setIsLoading(false);
        }
    }), [])

    useEffect(() => {
        setTimeout(async () => {
            let userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken')
                dispatch({type: 'RETRIEVE_TOKEN', token: userToken})
            } catch (e) {
                console.log('Error: ', e);
            }
        }, 1000)
    }, []);

    if (loginState.isLoading)
        return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size='large'/>
        </View>)

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {loginState.userToken !== null
                    ? (
                        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                            <Drawer.Screen name='HomeDrawer' component={MainTabScreen}/>
                            <Drawer.Screen name='Bookmark' component={BookmarkScreen}/>
                            <Drawer.Screen name='Support' component={SupportScreen}/>
                            <Drawer.Screen name='Settings' component={SettingsScreen}/>
                        </Drawer.Navigator>
                    )
                    : <RootStackScreen/>
                }
            </NavigationContainer>
        </AuthContext.Provider>
    );
}