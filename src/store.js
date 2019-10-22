import { createStore } from 'redux';
import {rootReducer} from './statemanagement/reducers/rootReducer';


/**This is the store where all state can be accessed from */
const store = createStore (
    
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
);


export default store;