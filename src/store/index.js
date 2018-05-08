"use strict";
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware, {END} from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist'
import {AsyncStorage} from "react-native";
import rootReducer from '../reducers/index';

export default async (onComplete: ?()=>void) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    let config = {
        key: 'root',
        storage: AsyncStorage,
    };
    const persistedReducer = persistReducer(config, rootReducer);
    const createAppStore = applyMiddleware(...middlewares)(createStore);

    let appStore = createAppStore(persistedReducer);

    const persistor = persistStore(appStore, null, () => onComplete());
    appStore.runSaga = sagaMiddleware.run;
    appStore.close = () => appStore.dispatch(END);
    return {store: appStore, persistor};
}
