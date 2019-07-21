/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import Fragment from "react";
import { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
 import Hello from './src/component/Hello'
import Hi from './src/component/Hi'

const App = () => {
  return (
    <View>
      <Hi/>
      <Hello name={'ss'} enthusiasmLevel={88}/>
    </View>
  );
};



export default App;
