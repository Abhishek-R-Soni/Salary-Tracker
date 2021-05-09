import {combineReducers} from 'redux';
import {saveDataReducer} from './saveDataReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    items: saveDataReducer,
    firestore: firestoreReducer
})

export default rootReducer;