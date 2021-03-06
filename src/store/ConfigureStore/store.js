import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import rootReducer from '../../reducers/rootReducers';
import  initialState  from '../InitialStore/index'

const middlewares =[thunk];
const devToolsEnhancer = window.devToolsExtension ? window.devToolsExtension() : f => f

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    devToolsEnhancer
  ));
  
export default store;