import React, {useContext, useState} from 'react';

import {Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import {LinearGradient} from "expo-linear-gradient";
import {AuthContext} from "../context";

const SignInScreen = ({navigation}) => {
    const { signIn } = useContext(AuthContext);

    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const handleEmailChange = (val) => {
        if (val.length !== 0)
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        else
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
    };
    const handlePasswordChange = (val) => setData({...data, password: val});
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
                    />
                    {data.check_textInputChange
                        ? <Animatable.View animation='bounceIn'>
                            <Feather name='check-circle' color='green' size={20}/>
                        </Animatable.View>
                        : null
                    }
                </View>

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
                <View style={styles.button}>
                    <TouchableOpacity style={styles.signIn} onPress={() => signIn(data.email,data.password)}>
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
    }
});
