// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class DemoView extends Component {

  componentWillMount() {

  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View style={this.props.style}>
        {this.props.children}
      </View>
    );
  }
}

//make this component available to the app
export default DemoView;
