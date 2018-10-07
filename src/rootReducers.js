import { combineReducers } from 'redux';

import location from './location_reducer';

const rootReducers = combineReducers({
  // Own reducers
  entities,
  entitiesMeta,
  location,
});

export default rootReducers;
