import { createStore, applyMiddleware, combineReducers } from 'redux';

// reducer for search
import { reducer as jokes } from './search/jokes';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

// reducer for kanban
import tasks from './kanban/kanbanReducer'

// apply middleware to log actions to console
const logger = Store => next => action => {
  console.log("dispatching ", action);
  console.log("current state ", Store.getState());

  const result = next(action);
  console.log("next state ", Store.getState());
  return result;
}

// combine multiple reducers into single Store
const reducer = combineReducers({  jokes, tasks });

const async = Store => next => action => {
  if(typeof action === 'function'){
    return action(Store.dispatch).catch(err => {
      console.log(err);
    });
  }
  return next(action);
};

// Use the reducer as an argument to the createStore function an export the result
// This export will be the datastore that we use for the application
export default createStore(reducer, applyMiddleware(async, logger));
