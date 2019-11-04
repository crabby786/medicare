import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { NavigationStackOptions, NavigationStackProp } from 'react-navigation-stack';
import { Button, AsyncStorage } from 'react-native';
import Recipes from '../Components/Recipes';
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
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Home screen
                </Text>
                   <Button title="sign me out" onPress={this._signOutAsync} />
              </Body>
            </CardItem>
          </Card>
          <Recipes></Recipes>
        </Content>
      </Container>
    );
  }
}