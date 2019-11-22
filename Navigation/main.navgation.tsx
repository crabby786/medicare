import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button, StatusBar, Platform } from 'react-native';
import { colors } from '../Constants/Theme';
import { Home,Settings,Login, AuthLoading } from "../Screens";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons as Icon, FontAwesome as Fa } from '@expo/vector-icons';
  const tabs = {
    Home:{
        screen: Home,
        navigationOptions: ({ navigation }) => ({
          title: 'Home',
          tabBarIcon:<Icon name="md-home" size={30} color={colors.red} />
        }),
      },
      Setting:{
        screen: Settings,
        navigationOptions: ({ navigation }) => ({
          title: 'Setting',
          tabBarIcon:<Icon name="md-settings" size={30} color={colors.red} />
        }),
      }
  };
  const TabNavigatorConfig = {
    navigationOptions:({navigation})=> {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {
        headerTitle:routeName,   
                        
      }
    }
  };
  const NavTabs = createBottomTabNavigator(tabs, TabNavigatorConfig);
  
  const DrawerStacks = createStackNavigator({NavTabs},{
    defaultNavigationOptions:({navigation}) =>  {
        return {
          headerLeft: <Icon size={30} color="#fff" name="md-menu"
          style={{paddingLeft:10}}
            onPress= {()=> navigation.openDrawer() }
           />,
           headerRight: <Icon size={30} color="#fff" name="md-notifications"
          style={{paddingRight:10}}
            onPress= {()=> navigation.openDrawer() }
           />,
           headerStyle:{
             backgroundColor:colors.red
           },
           headerTitleStyle: {
             fontWeight:"bold",
             fontSize:18
           },
           headerTintColor:"#fff",
        }
    }
} )
  const Drawer = createDrawerNavigator({
      DrawerStacks
  });
  const AuthStack = createStackNavigator({ Login: Login });
  const AppSwitch = createSwitchNavigator({
      AuthLoading: AuthLoading,
      Auth:AuthStack,
      App:Drawer
  },
  {
      initialRouteName:'AuthLoading'
  })
  const AppContainer = createAppContainer(AppSwitch);
  
  export default AppContainer;