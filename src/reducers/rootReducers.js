import { combineReducers } from '../../../../.cache/typescript/2.9/node_modules/redux';

import promoCodeReducer from './promoCodeReducer';

const rootReducers = combineReducers({
  // Own reducers
  promoCodeReducer,
});

export default rootReducers;
