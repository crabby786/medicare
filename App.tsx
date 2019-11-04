import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Content, Body } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppContainer from './Navigation/main.navgation';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from "./Store";

export default class App extends React.Component {
  public state = {
    isReady: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  public render(): React.ReactNode {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store} >
      <View style={{flex:1}} >
        <AppContainer></AppContainer>
      </View>
      </Provider>
    );
  }
}
