/* global window */
// import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  export default createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

  
