/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PaperProvider } from "react-native-paper"
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Provider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import store from "./src/store/store"

let persistor = persistStore(store)

export default function Main() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <PaperProvider>
                <NavigationContainer>
                    <App />
                </NavigationContainer>
            </PaperProvider>
            </PersistGate>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
