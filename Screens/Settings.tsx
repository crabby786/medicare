import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';

type Props = {
    navigation : NavigationStackProp
}
export default class Settings extends Component<Props> {
    static navigationOptions:NavigationStackOptions = {
        headerTitle:'Settings2'
    }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Setting screen
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}