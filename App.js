import React from 'react';
import { View, AppRegistry } from 'react-native';
import App from './source/app';

export default class APP extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('APP', () => APP);
