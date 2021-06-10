import React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

const SupportScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Support Screen </Text>
            <Button title='Click me' onPress={() => alert('Button is Pressed')}/>
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
   }
});

export default SupportScreen;
