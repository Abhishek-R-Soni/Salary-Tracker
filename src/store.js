import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from "redux-thunk";
import {getFirestore, reduxFirestore} from "redux-firestore";
import {getFirebase, reactReduxFirebase} from "react-redux-firebase";
import firebase from "./components/firebase";

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({
           getFirebase, getFirestore
        })),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase)
    )
);

export default store;