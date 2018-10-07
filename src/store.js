import { createStore, applyMiddleWare, compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducers';

const initialState ={};
const middleware =[thunk];
const devToolsEnhancer = window.devToolsExtension ? window.devToolsExtension() : f => f
;;

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    devToolsEnhancer
  ));
  
export default store;