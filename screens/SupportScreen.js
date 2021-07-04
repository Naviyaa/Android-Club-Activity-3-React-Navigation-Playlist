/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Button} from 'react-native';

function SupportScreen({navigation}) {
    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#8FF4F4'}}>
      <Text style={{fontSize: 20, padding: 10}}>Support Screen</Text>
      <View style={{margin: 10}}>
        <Button
          title="Go Back to Home"
          onPress={() => navigation.navigate('Home')}
          color="#000"
        />
      </View>
      <Button
        title="Open Drawer"
        onPress={() => navigation.openDrawer()}
        color="#000"
      />
    </View>
  );
}

export default SupportScreen;