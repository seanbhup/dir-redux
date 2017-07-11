import {combineReducers} from 'redux';
import StudentReducer from "./StudentReducer.js";
import SelectedStudentReducer from './SelectedStudentReducer.js';
import TimerReducer from './TimerReducer.js';

const rootReducer = combineReducers({
    students:StudentReducer,
    selectedStudent: SelectedStudentReducer,
    timerReducer: TimerReducer

})

export default rootReducer;
