/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PaperProvider } from "react-native-paper"
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Provider} from "react-redux"
import store from "./src/store/store"

export default function Main() {
    return (
        <Provider store={store}>
            <PaperProvider>
                <NavigationContainer>
                    <App />
                </NavigationContainer>
            </PaperProvider>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
