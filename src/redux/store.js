import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleWare from "redux-saga";
import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleWare();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (preloadedState) =>
  createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(sagaMiddleWare)));

const store = configureStore({});

sagaMiddleWare.run(rootSaga);

export default store;
