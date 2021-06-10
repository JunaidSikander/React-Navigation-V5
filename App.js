import React from 'react';

import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {BookmarkScreen, MainTabScreen, SettingsScreen, SupportScreen} from "./src/screens";
import {DrawerContent} from './src/screens/DrawerContent'

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
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name='HomeDrawer' component={MainTabScreen}/>
                <Drawer.Screen name='Bookmark' component={BookmarkScreen}/>
                <Drawer.Screen name='Support' component={SupportScreen}/>
                <Drawer.Screen name='Settings' component={SettingsScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}