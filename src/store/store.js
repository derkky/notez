import {configureStore, getDefaultMiddleWare} from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {persistStore, persistReducer} from "redux-persist"
import {combineReducers} from "redux"

import noteSlice from "./noteSlice"
import noteInputSlice from "./noteInputSlice"
import categorySlice from "./categorySlice"

const reducers = combineReducers({
    notes: noteSlice,
    noteInput: noteInputSlice,
    categories: categorySlice
})

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    blacklist: ['noteInput']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({serializableCheck: false})
})

export default store