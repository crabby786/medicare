/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from '../Constants/fbConfig'

export default createStore(reducers,
    compose(
      // applyMiddleware(thunk.withExtraArgument({getFirebase})),
      // reactReduxFirebase(fbConfig)
      applyMiddleware(thunk)
    )
  );
