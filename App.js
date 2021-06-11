import React from 'react';

import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {BookmarkScreen, MainTabScreen, SettingsScreen, SplashScreen, SupportScreen} from "./src/screens";
import {DrawerContent} from './src/screens/DrawerContent'
import RootStackScreen from "./src/screens/RootStackScreen";

const Drawer = createDrawerNavigator()

export default function App() {

    return (
        <NavigationContainer>
            <RootStackScreen/>
            {/*<Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name='HomeDrawer' component={MainTabScreen}/>
                <Drawer.Screen name='Bookmark' component={BookmarkScreen}/>
                <Drawer.Screen name='Support' component={SupportScreen}/>
                <Drawer.Screen name='Settings' component={SettingsScreen}/>
            </Drawer.Navigator>*/}
        </NavigationContainer>
    );
}