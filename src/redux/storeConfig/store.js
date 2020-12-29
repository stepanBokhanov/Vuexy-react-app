import { createStore, applyMiddleware, compose } from "redux"
import createDebounce from "redux-debounced"
import thunk from "redux-thunk"
import rootReducer from "../reducers/rootReducer"
import { persistStore } from 'redux-persist';

const middlewares = [thunk, createDebounce()]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(...middlewares))
)

export const persistor = persistStore(store);

export  { store, persistStore };