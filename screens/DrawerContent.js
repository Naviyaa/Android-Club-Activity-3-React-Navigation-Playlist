/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {... props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                        <Avatar.Image source={{uri: 'https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=6&m=1093110112&s=612x612&w=0&h=uBH7Rj-Ew_ixjunRrD_U7alq2ZUPJ_5XgMpe9xO52QQ='}} size={50} />
                        <View style={{flexDirection: 'column', marginLeft: 15}}>
                            <Title style={styles.title}>Naviyaa P</Title>
                            <Caption style={styles.caption}>@navi_p</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem icon={({color, size}) => (
                        <Icon name="home" color={color} size={size} />
                    )} label="Home" onPress={() => {props.navigation.navigate('Home');}} />
                    <DrawerItem icon={({color, size}) => (
                        <Icon name="account" color={color} size={size} />
                    )} label="Profile" onPress={() => {props.navigation.navigate('Profile');}} />
                    <DrawerItem icon={({color, size}) => (
                        <Icon name="bookmark" color={color} size={size} />
                    )} label="Bookmarks" onPress={() => {props.navigation.navigate('Bookmarks');}} />
                    <DrawerItem icon={({color, size}) => (
                        <Icon name="bell" color={color} size={size} />
                    )} label="Notifications" onPress={() => {props.navigation.navigate('Notifications');}} />
                    <DrawerItem icon={({color, size}) => (
                        <Icon name="account-check" color={color} size={size} />
                    )} label="Support" onPress={() => {props.navigation.navigate('Support');}} />
                </Drawer.Section>
                <Drawer.Section style={styles.drawerSection} title="Preferences">
                    <TouchableRipple onPress={() => {toggleTheme();}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={isDarkTheme} />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem icon={({color, size}) => (
                <Icon name="exit-to-app" color={color} size={size} />
            )} label="Sign Out" onPress={() => {}} />
        </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
      marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
