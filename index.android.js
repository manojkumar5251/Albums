import React from 'react';
import {View,AppRegistry,Text} from 'react-native';
import Header from './src/header';
import Albumlist from './src/albumlist';

const app = () => (
  <View style={{flex:1}}>
    <Header text='MANOJ'/>
    <Albumlist />
  </View>)
AppRegistry.registerComponent('Manoj', () => app);
