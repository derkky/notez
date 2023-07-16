/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';

import AppTitleBar from "./src/components/AppTitleBar"
import NoteInputBar from "./src/components/NoteInputBar"
import AppDrawer from "./src/components/AppDrawer"
import AddNoteButton from "./src/components/AddNoteButton"

import MainScreen from "./src/containers/MainScreen"
import NoteInputScreen from "./src/containers/NoteInputScreen"


const Drawer = createDrawerNavigator()

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={AppDrawer}
       >
          <Drawer.Screen
            name="Home"
            component={MainScreen}
            options={{header: (props) => <AppTitleBar {...props}/>}}
          />
          <Drawer.Screen
            name="Input"
            component={NoteInputScreen}
            options={{header: (props) => <NoteInputBar {...props}/>}}
          />
      </Drawer.Navigator>
      <AddNoteButton />
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
