import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "./indexReducer";
import rootSaga from "./indexSaga";

const bindMiddleware = (middleware) => {
  const { composeWithDevTools } = require("redux-devtools-extension");
  return composeWithDevTools(applyMiddleware(...middleware));
};
export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
