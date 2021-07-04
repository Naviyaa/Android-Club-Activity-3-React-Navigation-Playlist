/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground, Text} from 'react-native';

function BookmarkScreen() {
    return (
    <ImageBackground source={require('../assets/bck.jpeg')} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 26, backgroundColor: '#fff', color: '#000', padding: 10}}>View Your Bookmarks</Text>
    </ImageBackground>
  );
}

export default BookmarkScreen;