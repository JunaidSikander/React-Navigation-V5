import React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Details Screen </Text>
            <Button title='Go to Details Screen Again.'
                    onPress={() => navigation.push('Details')}
            />
            <Button title='Go to Home'
                    onPress={() => navigation.push('Home')}
            />
            <Button title='Go Back.'
                    onPress={() => navigation.goBack()}
            />
            <Button title='Go to First Screen.'
                    onPress={() => navigation.popToTop()}
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

export default DetailsScreen;
