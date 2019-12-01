import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { NavigationStackOptions, NavigationStackProp } from 'react-navigation-stack';
import { Button, AsyncStorage } from 'react-native';
import StockList from '../Components/StockList';
import Block from '../Components/Block';
type Props = {
    navigation: NavigationStackProp
  };
export default class Home extends Component<Props> {
    static navigationOptions: NavigationStackOptions = {
        headerTitle: 'Home',
    };
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };
  render() {
    const { navigation } = this.props;
    return (
      
      <Block space="between" >
      <Card>
        <CardItem>
          <Body>
            <Text  >
            Hi Raju! Handpicked deals for you
            </Text>
          </Body>
        </CardItem>
      </Card>
      <StockList navigation = { navigation} ></StockList>
      </Block>
    );
  }
}