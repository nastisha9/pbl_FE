import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

/*
 * Router
 */
import {createBrowserHistory} from 'history';
import {routerMiddleware, connectRouter} from 'connected-react-router';
/*
 *
 * Root reducer is placed here
 * Default redux store configuration
 */

import rootReducer from './reducers';

import rootSaga from './sagas';

export const history = createBrowserHistory();

const reducer = combineReducers({...rootReducer, router: connectRouter(history)});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, routerMiddleware(history)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState = {}) => {
  const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middleware))(createStore);

  const store = createStoreWithMiddleware(reducer, initialState);

  sagaMiddleware.run(rootSaga);

  return {store};
};

const {store} = configureStore();

export default store;
