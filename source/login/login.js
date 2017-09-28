import React from 'react';
import { Alert, StyleSheet, TouchableWithoutFeedback, Text, AppRegistry, TextInput, View, ActivityIndicator } from 'react-native';

import MainMenu from '../main-menu/main-menu';

import Dimensions from 'Dimensions';

const height = Dimensions.get('window').height/720;
/*const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
} = FBSDK;*/

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isLoggedIn: false,
      username: '',
      password: '',
      user: {},
    }
  }

  _login() {
    this.setState({isLoading: true});
    fetch('http://9b5ca2da.ngrok.io/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: this.state.username,
      password: this.state.password,
    })},
    )
    .then((response) => {

      response.json();

    })
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        isLoggedIn: true,
        user: {
          username: responseJson.user.username,
          password: responseJson.user.password,
        },
      });
    })
    .catch((error) => {
      console.error(error);
    })
  }

  _register() {
    //chamar o ecrã de Registo
  }

  render() {
    if(this.state.isLoggedIn) {
      return (
        <MainMenu user={this.state.user}/>
      );
    }

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'flex-end', padding: 15*height}}>
          <TextInput
            style={{height: 40}}
            placeholder="Username!"
            onChangeText={(username) => this.setState({username})}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Password!"
            onChangeText={(password) => this.setState({password})}
          />
        </View>
        <View style={{flex: 0.2, flexDirection:'row', alignItems: 'flex-start', justifyContent: 'space-around'}}>
          <View style={styles.stretchFlex}>
            <TouchableWithoutFeedback
                onPress={() => this._login()}
                style={styles.stretchFlex}
            >
              <View style={styles.buttonView}>
                <Text style={{color: '#000000', fontSize: 12*height}}>login</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.stretchFlex}>
            <TouchableWithoutFeedback
                onPress={() => this._register()}
                style={styles.stretchFlex}
            >
              <View style={styles.buttonView}>
                <Text style={{color: '#000000', fontSize: 12*height}}>register</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={{flex:1}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretchFlex: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 15*height,
  },
  buttonView: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ffaa',
    borderWidth: 1*height,
    borderColor: '#000000',
  }
});

AppRegistry.registerComponent('APP', () => Login);
