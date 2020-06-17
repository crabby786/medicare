import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Content, Body, StyleProvider } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppContainer from './Navigation/main.navgation';
import { View, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import store from "./Store";
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

export default class App extends React.Component {
  public state = {
    isReady: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
      "Rubik-Black": require("./assets/fonts/Rubik-Black.ttf"),
        "Rubik-BlackItalic": require("./assets/fonts/Rubik-BlackItalic.ttf"),
        "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
        "Rubik-BoldItalic": require("./assets/fonts/Rubik-BoldItalic.ttf"),
        "Rubik-Italic": require("./assets/fonts/Rubik-Italic.ttf"),
        "Rubik-Light": require("./assets/fonts/Rubik-Light.ttf"),
        "Rubik-LightItalic": require("./assets/fonts/Rubik-LightItalic.ttf"),
        "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
        "Rubik-MediumItalic": require("./assets/fonts/Rubik-MediumItalic.ttf"),
        "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
        Entypo: require("native-base/Fonts/Entypo.ttf"),
        Feather: require("native-base/Fonts/Feather.ttf"),
        FontAwesome: require("native-base/Fonts/FontAwesome.ttf"),
        Octicons: require("native-base/Fonts/Octicons.ttf")
    });
    this.setState({ isReady: true });
  }
  
  public render(): React.ReactNode {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <AppContainer></AppContainer>
        {/* <StyleProvider style={getTheme(material)}>
          <Container>
            <Content>
                
            </Content>
          </Container>
        </StyleProvider> */}
      </Provider>
    );
  }
}
