/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

function ProfileScreen({navigation}) {
    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button
        title="Go Back to Home"
        onPress={() => navigation.navigate('Home')}
        color="#000"
      />
    </View>
  );
}

export default ProfileScreen;