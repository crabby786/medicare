import React, { Component } from 'react';
import { AsyncStorage, View, } from 'react-native';
import { colors } from '../Constants/Theme';
import { Login, AuthLoading,BrowserScreen } from "../Screens";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons as Icon, FontAwesome as Fa } from '@expo/vector-icons';
  // const tabs = {
  //   Home:{
  //       screen: Home,
  //       navigationOptions: ({ navigation }) => ({
  //         title: 'Home',
  //         tabBarIcon:<Icon name="md-home" size={30} color={colors.red} />
  //       }),
  //     },
  //     Setting:{
  //       screen: Settings,
  //       navigationOptions: ({ navigation }) => ({
  //         title: 'Scanner',
  //         tabBarIcon:<Icon name="md-camera" size={30} color={colors.pink} />
  //       }),
  //     }
  // };

  
  // const TabNavigatorConfig = {
  //   navigationOptions:({navigation})=> {
  //     const {routeName} = navigation.state.routes[navigation.state.index];
  //     return {
  //       headerTitle:routeName,            
  //       headerLeft:  <Icon size={30} color="#fff" name="md-menu"
  //       style={{paddingLeft:10}}
  //         onPress= {()=> navigation.openDrawer() }
  //        />,             
  //     }
  //   }
  // };
  // const NavTabs = createBottomTabNavigator(tabs, TabNavigatorConfig);
  
  // const DrawerStacks = createStackNavigator({
  //   NavTabs,ProductDetail:{
  //     screen: ProductDetail,
  //     navigationOptions: ({ navigation }) => ({
  //       title: 'Detail',
  //     }),
  //   }
  // },
  // {
  //   defaultNavigationOptions:({navigation}) =>  {
  //     const RightBox = () =>  {
  //       return (
  //         <View  style = {{flex:1,flexDirection:'row'}}>
  //         <Icon size={30} color="#fff" name="md-notifications"
  //         style={{paddingRight:20}}
  //           onPress= {()=> navigation.openDrawer() }
  //          />
  //          <Icon size={30} color="#fff" name="md-log-out"
  //         style={{paddingRight:10}}
  //           onPress= {async () => {
  //             await AsyncStorage.clear();
  //             navigation.navigate('Auth');
  //           } }
  //          />
  //         </View>
  //       )
  //     }
  //       return {
  //          headerRight: <RightBox></RightBox>,
  //          headerStyle:{
  //            backgroundColor:colors.pink
  //          },
  //          headerTitleStyle: {
  //            fontWeight:"bold",
  //            fontSize:18
  //          },
  //          headerTintColor:"#fff",
  //       }
  //   }
  // } 
  // )
  // const ProductStack = createStackNavigator({
  //   ProductDetail
  // })
  // const Drawer = createDrawerNavigator({
  //     DrawerStacks
  // });
  const AuthStack = createStackNavigator({ Login: Login });
  const AppSwitch = createSwitchNavigator({
      // AuthLoading: AuthLoading,
      // Auth:AuthStack,
      App:BrowserScreen
  },
  {
      initialRouteName:'App'
  })
  const AppContainer = createAppContainer(AppSwitch);
  
  export default AppContainer;