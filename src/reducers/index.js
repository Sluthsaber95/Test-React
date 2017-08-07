import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
}); // again this uses what is called the short hand property name, feature of ES6

export default rootReducer;
