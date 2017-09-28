import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import NavigationBarIconButton from '../navigation-bar/navigation-bar-icon-button';

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: <View/>, number: 0};
  }

  render() {
    let colors = ['#aaaaaa','#aaaaaa','#aaaaaa','#aaaaaa','#aaaaaa'];
    colors[this.state.number] = '#000000'
    return (
      <View style={{flex: 1, alignSelf: 'stretch'}}>
        <View style={{flex: 14, alignSelf: 'stretch'}}>
          {this.state.content}
        </View>
        <View style={styles.navBar}>
          <NavigationBarIconButton number={0} style={{flex: 1}} topView={this} view={<View/>} iconName='person' iconColor={colors[0]} iconType='material'/>
          <NavigationBarIconButton number={1} style={{flex: 1}} topView={this} view={<View/>} iconName='room' iconColor={colors[1]} iconType='material'/>
          <NavigationBarIconButton number={2} style={{flex: 1}} topView={this} view={<View/>} iconName='search' iconColor={colors[2]} iconType='material'/>
          <NavigationBarIconButton number={3} style={{flex: 1}} topView={this} view={<View/>} iconName='view-list' iconColor={colors[3]} iconType='material'/>
          <NavigationBarIconButton number={4} style={{flex: 1}} topView={this} view={<View/>} iconName='shopping-cart' iconColor={colors[4]} iconType='font-awesome'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    borderTopWidth: 0.5,
    borderTopColor: '#000000',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
});

AppRegistry.registerComponent('APP', () => MainMenu);
