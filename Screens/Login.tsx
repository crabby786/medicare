import React, { Component } from 'react';
import { Button, View,AsyncStorage } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp
};
export default class extends React.Component<Props> {
    static navigationOptions: NavigationStackOptions = {
        headerTitle: 'Login',
    };

    render() {
      return (
        <View>
          <Button title="Sign in!" onPress={this._signInAsync} />
        </View>
      );
    }
  
    _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    };
  }
  