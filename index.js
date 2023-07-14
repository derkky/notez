/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PaperProvider } from "react-native-paper"
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';


export default function Main() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <App />
            </NavigationContainer>
        </PaperProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
