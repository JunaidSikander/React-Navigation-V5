import React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Home Screen </Text>
            <Button title='Go to Details Screen'
                    onPress={() => navigation.navigate('Details')}
            />
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

export default HomeScreen;
