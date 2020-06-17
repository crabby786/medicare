import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// See https://github.com/awesomejerry/react-native-qrcode-svg
import SvgQRCode from 'react-native-qrcode-svg';


// Simple usage, defaults for all but the value
function Simple() {
  return <SvgQRCode value="http://192.168.1.4:3000/#/?Accountid=4#/" />;
}

// 20% (default) sized logo from local file string with white logo backdrop
function LogoFromFile() {
  let logoFromFile = require('./assets/logo.png');

  return <SvgQRCode value="Just some string value" logo={logoFromFile} />;
}

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Simple />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
});
