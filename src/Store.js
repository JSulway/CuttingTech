import { createStore, applyMiddleware, combineReducers } from 'redux';
// redux-thunk - middleware that allows you to write action creators that return a function instead of an action
import thunk from 'redux-thunk';
// connecting your browser to the Redux application. Without it, you will not be able to load the tools from your console.
import { composeWithDevTools } from 'redux-devtools-extension';

// reducer for MainActions (parent actions to all child tabs)
import main from './MainActions';
// reducer for search tab
import results from './search/SearchReducer';
// reducer for kanban tab
import tasks from './kanban/kanbanReducer'
// reducer for service tab
import planets from './demoDBDirectViaService/ServiceReducer'

// apply middleware to log actions to console
const logger = Store => next => action => {
  console.log("dispatching ", action);
  console.log("current state ", Store.getState());
  const result = next(action);
  console.log("next state ", Store.getState());
  return result;
}

// combine multiple reducers into single Store
const reducer = combineReducers({  main, results, tasks, planets });
const async = Store => next => action => {
  var here = "";
  if(typeof action === 'function'){
    return action(Store.dispatch)
  }
  return next(action);
};

// Use the reducer as an argument to the createStore function an export the result
// This export will be the datastore that we use for the application
export default createStore(reducer, applyMiddleware(async, logger));
