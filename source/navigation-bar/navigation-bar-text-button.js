import React from 'react';
import { AppRegistry, StyleSheet, View, TouchableWithoutFeedback, Text } from 'react-native';

export default class NavigationBarTextButton extends React.Component {
  _onButtonPress() {
    this.props.topView.setState(() => {return {content: this.props.view, number: this.props.number};});
  }

  render() {
    return (
      <View style={styles.stretchFlex}>
          <TouchableWithoutFeedback
              onPress={() => this._onButtonPress()}
              style={styles.stretchFlex}
          >
            <View style={styles.iconView}>
              <Text color = {this.props.textColor}>
                {this.props.text}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  stretchFlex: {
    flex: 1,
    alignSelf: 'stretch',
  },
  iconView: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

AppRegistry.registerComponent('APP', () => NavigationBarTextButton);
