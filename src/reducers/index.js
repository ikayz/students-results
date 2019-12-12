import {combineReducers} from 'redux';
import StudentReducer from './StudentReducer';

const rootReducer = combineReducers({
  studentsResult: StudentReducer,
});

export default rootReducer;
