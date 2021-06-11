import React, {useContext, useState} from 'react';

import {Alert, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import {LinearGradient} from "expo-linear-gradient";
import {AuthContext} from "../context";
import {Users} from "../model";

const SignInScreen = ({navigation}) => {
    const {signIn} = useContext(AuthContext);

    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true
    });

    const handleEmailChange = (val) => {
        if (val.length >= 4)
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true
            });
        else
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser: false
            });
    };
    const handlePasswordChange = (val) => {
        if (val.length >= 6)
            setData({...data, password: val, isValidPassword: true})
        else
            setData({...data, password: val, isValidPassword: false})
    };
    const handleValidUser = (val) => {
        if (val.trim().length >= 4)
            setData({...data, isValidUser: true})
        else
            setData({...data, isValidUser: false})
    };
    const handleLogin = (email, password) => {
        const foundUser = Users.filter(user => user.email === email && user.password === password);

        if(email.length === 0 && password.length === 0){
            Alert.alert('Wrong Input!', 'Username & password field cannot be empty');
            return;
        }

        if (foundUser.length === 0) {
            Alert.alert('Invalid User!', 'Username or password is incorrect .', [
                {text: 'Okay'}
            ]);
            return 0;
        }
        signIn(foundUser);

    };
    const updateSecureTextEntry = () => setData({...data, secureTextEntry: !data.secureTextEntry});

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle='light-content'/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome</Text>
            </View>
            <Animatable.View style={styles.footer} animation='fadeInUpBig'>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome name='user-o' color='#05375A' size={20}/>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Your Email'
                        autoCapitalize='none'
                        onChangeText={(val) => handleEmailChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange
                        ? <Animatable.View animation='bounceIn'>
                            <Feather name='check-circle' color='green' size={20}/>
                        </Animatable.View>
                        : null
                    }
                </View>

                {data.isValidUser
                    ? null
                    : <Animatable.View animation='fadeInLeft' duration={500}>
                        <Text style={styles.errorMsg}>Username must be 4 characters long</Text>
                    </Animatable.View>
                }


                <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style={styles.action}>
                    <Feather name='lock' color='#05375A' size={20}/>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={data.secureTextEntry}
                        placeholder='Your Password'
                        autoCapitalize='none'
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        <Feather name={data.secureTextEntry ? 'eye' : 'eye-off'} color='gray' size={20}/>
                    </TouchableOpacity>
                </View>
                {data.isValidPassword
                    ? null
                    : <Animatable.View animation='fadeInLeft' duration={500}>
                        <Text style={styles.errorMsg}>Password must be 6 characters long</Text>
                    </Animatable.View>
                }

                <View style={styles.button}>
                    <TouchableOpacity style={styles.signIn} onPress={() => handleLogin(data.email, data.password)}>
                        <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
                            <Text style={[styles.textSign, {color: '#FFF'}]}>Sign in</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}
                                      style={[styles.signIn, {
                                          color: '#009387', borderWidth: 1, marginTop: 15
                                      }]}>
                        <Text style={[styles.textSign, {color: '#009387'}]}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    errorMsg: {
        color: 'red'
    }
});
