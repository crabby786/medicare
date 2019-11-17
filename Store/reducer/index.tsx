
import soc from './societyRdx';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './AuthReducer';
import cartReducer from './CartReducer';



export default combineReducers({
    soc,
    firebase: firebaseReducer,
    Auth:authReducer,
    cart:cartReducer
  })  ;
