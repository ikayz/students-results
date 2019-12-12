import {combineReducer} from 'redux';
import StudentReducer from './StudentReducer';

const rootReducer = combineReducer({
  studentsResult: StudentReducer,
});

export default rootReducer;
