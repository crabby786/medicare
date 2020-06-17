import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { ActivityIndicator, StyleSheet, Alert,Dimensions,BackHandler, SafeAreaView,StatusBar,Platform ,View ,Button  } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

StatusBar.setBarStyle("light-content");
if (Platform.OS === "android") {

  StatusBar.setBackgroundColor("#ffa803");
  StatusBar.setTranslucent(false);
}

export default class BrowserScreen extends Component {
  // static navigationOptions: NavigationStackOptions = {
  //     headerTitle: 'Home',
  // };
  // config2  = {...Constants.manifest};

  state = {
    uri: 'http://192.168.1.4:3000/#/?Accountid=4#/',
    isLoading: true,
    isError: false,
    navState:{canGoBack:false,canGoForward:false, currentUrl:'',url:''},
    dataFromWeb:{isLoading:true,pushSuccess:false, req:""}
  }
  webref = React.createRef(null)
  constructor(props) {
    super(props);
  }
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }
  componentDidMount() {
    this.getPermissionAsync();
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backButtonHandler
    )
  }
  componentDidUpdate(props, state) {
    if(state.dataFromWeb.req !== this.state.dataFromWeb.req && this.state.dataFromWeb.req !== "") {
        const {req} = this.state.dataFromWeb
       let reqObj = this.requestFromWeb.find(obj=> obj.req == req );
       if(reqObj)
       reqObj.fun()
    }
  }
  componentWillUnmount() {
    this.backHandler.remove();
    
  }
  deliverCamera = async()=>{
    let {requestFromWeb} = this.state;
      this.setState({requestFromWeb:{...requestFromWeb,req:'' }})
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        this.w_setData({ img: result.uri });
      }
  }
    requestFromWeb = [
      {req:'camera', fun:this.deliverCamera}
    ]
  backButtonHandler = () => {
      if (this.webref.current ) {
        // console.log('url',this.state.navState.url, 'current',this.state.navState.canGoBack)
        if(this.state.navState.canGoBack ) {
          this.webref.current.goBack()
          return true;
        }
      else return false
      }
    }
    
  frontButtonHandler = () => {
    if (this.webref.current) this.webref.current.goForward()
  }
  handleError = (msg ,title) =>
  Alert.alert(
    title ? title : "Something Wrong",
     msg,
    [
      { text: "OK", onPress: () => this.setState({isError:false}) }
    ],
    { cancelable: false }
  );
    
    w_getData =()=> {
        var dataForNative = window.store.getState().restListReducer
      window.ReactNativeWebView.postMessage(JSON.stringify(dataForNative))
      };
    w_setData =(obj)=> {
        let fun = () => window.store.dispatch({type:'Set_Data', payload:{reqObj:obj}});
        this.handlePushMessage(fun)
      };
    handlePushMessage =(fun)=> this.webref.current.injectJavaScript( `eval(${fun})()`);

    handlePullMessage = (event)=>   {
      //dataForNative
      const data = event.nativeEvent.data;
      if(data && typeof(data)=== "string") {
        let dataFromWeb = JSON.parse(data);
         this.setState({dataFromWeb:{...this.state.dataFromWeb,...dataFromWeb}});
      }
    }
    

  render() {
    const { width, height } = Dimensions.get('window'); 
    return (
      <>
        <SafeAreaView style={styles.container}>
      <WebView
            source={{ uri: this.state.uri }}
            style={{ flex: 1,width,height}}
            bounces={false}
            geolocationEnabled={true}
            // onLoadStart={syntheticEvent => {
            //   const nativeEvent = syntheticEvent.nativeEvent;
            //   this.setState({ isLoading: nativeEvent.loading })
            // }}
            startInLoadingState
            renderLoading={() => <ActivityIndicator size="small" color= '#000000' />}

            ref={this.webref}

            onHttpError={syntheticEvent => {
              const { nativeEvent } = syntheticEvent;
              this.handleError('please try again later', 'Network Error')
              console.warn(
                'WebView received error status code: ',
                nativeEvent.statusCode,
              );
            }}

            onMessage={(e)=>  this.handlePullMessage(e)}

            onNavigationStateChange={navState => {
              this.setState({navState:{...navState}})
              // this.canGoBack = navState.canGoBack;
            }}
          />
          <Button onPress={this.handlePushMessage} title={'debug'} style= {styles.btn} />
          <Button onPress={()=>this.webref.current.reload()} title={'Reload'} style= {styles.btn} />
      </SafeAreaView>
      </>
    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {
    flex: 1,
    margin: 20,
  },
});