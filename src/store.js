import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas'
import {rootReducer} from './statemanagement/reducers/rootReducer';


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore (
    rootReducer,
    enhancer(applyMiddleware(sagaMiddleware)) 
);

// then run the saga
sagaMiddleware.run(mySaga);

export default store;



