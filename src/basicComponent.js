// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// create a component
export class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>React Foo 2018</Text>
        <Text>Hyderabad</Text>
      </View>
    );
  }
}

//make this component available to the app
export default Header;
