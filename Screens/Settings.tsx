import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';
import { NavigationEventSubscription } from "react-navigation";
import ExpoScanner from "../Components/Scanner";
import {  ActivityIndicator} from 'react-native'
import { Block } from '../Components';


type Props = {
    navigation : NavigationStackProp
}
export default class Settings extends Component<Props> {
    static navigationOptions:NavigationStackOptions = {
        headerTitle:'Settings2'
    }
    state = {
      isFocused: false
    };
  focusListner: NavigationEventSubscription;
  blurListner: NavigationEventSubscription;
    componentDidMount() {
      this.focusListner = this.props.navigation.addListener(
        'didFocus',
        () => this.setState({ isFocused: true }),
      );
      this.blurListner = this.props.navigation.addListener(
        'willBlur',
        () => this.setState({ isFocused: false }),
      );
    }
    componentWillUnmount() {
      this.focusListner.remove();
      this.blurListner.remove();
    }

  render() {
    if (!this.state.isFocused) {
      return (
        <Block space="between" >
          <ActivityIndicator size='large' />
        </Block>
      );
    }
    return (<ExpoScanner navigation={this.props.navigation} />);
  }
}
