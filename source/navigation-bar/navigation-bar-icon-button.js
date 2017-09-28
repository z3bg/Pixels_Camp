import React from 'react';
import { AppRegistry, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';

export default class NavigationBarIconButton extends React.Component {
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
              <Icon name={this.props.iconName} type={this.props.iconType} color={this.props.iconColor}/>
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

AppRegistry.registerComponent('APP', () => NavigationBarIconButton);
