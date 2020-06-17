

export default ({ config }) => {
    // console.log(config.name); 
    return {
      ...config,
      primaryColor:'#ffa803',
      extra: {
        themeColors: {primary:'#ffa803'},
        uriList:uriList
      },
    };
  };


  //uses of extra in App.js
// import Constants from 'expo-constants';
// Constants.manifest.extra.fact === 'kittens are cool';
const uriList = [
    'https://dishco.firebaseapp.com/#/?Accountid=4#/',
    'https://flutter-web-8f0d3.web.app/#/',
    'https://home.dishco.com/kahospitality/?Accountid=4#/',
    'http://192.168.1.4:3000/#/?Accountid=4#/'
  ]