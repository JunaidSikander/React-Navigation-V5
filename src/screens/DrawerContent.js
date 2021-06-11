import React, {useState} from 'react';

import {StyleSheet, View} from 'react-native';
import {Avatar, Caption, Drawer, Paragraph, Switch, Text, Title, TouchableRipple} from 'react-native-paper'
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export function DrawerContent(props) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.container}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={{uri: 'https://lh3.googleusercontent.com/ogw/ADea4I64rEFEafOrK8D6jIcGYIJXwekLsDv6SyhLsQoUz54=s64-c-mo'}}
                                size={50}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title>Junaid Sikander</Title>
                                <Caption>@junaid.hakro</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>80</Paragraph>
                                <Caption> Following</Caption>
                            </View>
                            <View style={{flexDirection: 'row', marginLeft: 15}}>
                                <Paragraph style={styles.paragraph}>90</Paragraph>
                                <Caption> Following</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialIcons
                                    name="home"
                                    color={color}
                                    size={size}
                                />)}
                            label='Home'
                            onPress={() => props.navigation.navigate('Home')}/>
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialIcons
                                    name="account-circle"
                                    color={color}
                                    size={size}
                                />)}
                            label='Profile'
                            onPress={() => props.navigation.navigate('Profile')}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialIcons
                                    name="bookmark"
                                    color={color}
                                    size={size}
                                />)}
                            label='Bookmark'
                            onPress={() => props.navigation.navigate('Bookmark')}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialIcons
                                    name="settings"
                                    color={color}
                                    size={size}
                                />)}
                            label='Settings'
                            onPress={() => props.navigation.navigate('Settings')}/>
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialIcons
                                    name="check"
                                    color={color}
                                    size={size}
                                />)}
                            label='Support'
                            onPress={() => props.navigation.navigate('Support')}
                        />
                    </Drawer.Section>
                    <Drawer.Section title='Preferences'>
                        <TouchableRipple onPress={() => toggleTheme()}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginLeft: 20,
                                marginRight: 20
                            }}>
                                <Text> Dark Theme </Text>
                                <View pointerEvents='none'>
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <MaterialIcons
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />)}
                    label='Sign out'
                    onPress={() => {
                    }}/>
            </Drawer.Section>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginLeft: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#F4F4F4',
        borderTopWidth: 1
    }
});