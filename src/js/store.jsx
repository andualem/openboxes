import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, reduxThunk)(createStore);
export default createStoreWithMiddleware(rootReducer);
