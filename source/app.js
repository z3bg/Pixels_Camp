import React from 'react';
import { AppRegistry } from 'react-native';

import Login from './login/login';

export default class App extends React.Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('APP', () => App);
