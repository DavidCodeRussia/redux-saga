import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './sagas';
import news from './reducers/news';
import errors from './reducers/errors';

const sagaMiddleWare = createSagaMiddleWare();

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (preloadedState) =>
  createStore(
    combineReducers({
      news,
      errors,
    }),
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleWare)),
  );

const store = configureStore({});

sagaMiddleWare.run(rootSaga);

export default store;
