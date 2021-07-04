/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Button} from 'react-native';

function NotifScreen({navigation}) {
    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{padding: 10}}>View Your Notifications Here!</Text>
      <Button
        title="Open Drawer"
        onPress={() => navigation.openDrawer()}
        color="#000"
      />
    </View>
  );
}

export default NotifScreen;