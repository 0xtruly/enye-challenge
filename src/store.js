import { createStore } from 'redux';
import {rootReducer} from './statemanagement/reducers/rootReducer';


/**This is the store where all state can be accessed from */
const store = createStore (
    
    rootReducer,
    window._REDUX_DEVTOOLS_EXTENTION_&&window._REDUX_DEVTOOLS_EXTENTION_()
    
);


export default store;