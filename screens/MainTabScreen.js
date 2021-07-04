/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import NotifScreen from './NotifScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MainTabScreen(){
    return (
        <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#113D68' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#113D68',
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotifScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor: '#615F04',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#610406',
          tabBarIcon: ({ color }) => (
            <Icon name="person-circle-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: '#5C085D',
          tabBarIcon: ({ color }) => (
            <Icon name="reader-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#095D08',
          tabBarIcon: ({ color }) => (
            <Icon name="settings-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
    );
}


const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#113D68'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerLeft: () => (
            <Icon.Button name="menu" size={26} backgroundColor="#113D68" onPress={() => navigation.openDrawer()} ></Icon.Button>),
    }}/>
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#5C085D'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="menu" size={26} backgroundColor="#5C085D" onPress={() => navigation.openDrawer()} ></Icon.Button> ),
    }} />
  </DetailsStack.Navigator>
);

export default MainTabScreen;