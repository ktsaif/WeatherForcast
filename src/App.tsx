
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {ReactNode} from 'react';
import {useColorScheme } from 'react-native';
import {RootNavigation} from './routes/rootNavigation';

const App: () => ReactNode = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <RootNavigation />
  );
};

export default App;
