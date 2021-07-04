/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

function HomeScreen({navigation}) {
    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
        color="#000"
      />
    </View>
  );
}

export default HomeScreen;