import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: 'user'
//   }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
    trace: true,
});

const store = createStore(
   // persistedReducer,
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
//let persistor = persistStore(store)

sagaMiddleware.run(rootSaga);

//export { store, persistor };
  


export default store;
