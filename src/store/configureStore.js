import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import immutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore (initialState){
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, immutableStateInvariant()) //this allows use to apply Redux middleware, make sure you have the the brackets at the end of the function() to invoke it
  ); // there are many interesting things you can do with middleware
} // other things you can do the store, such as adding support for hotreloading, or adding support for the Redux dev tools extension in chrome
