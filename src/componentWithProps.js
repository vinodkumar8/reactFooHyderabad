// import liraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// create a component
export class HeaderWithProps extends Component {
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
  }
  static defaultProps = {
    title: 'Default Title',
    subTitle: 'Default SubTitle'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <Text>{this.props.subTitle}</Text>
      </View>
    );
  }
}

export const FCHeaderWithPRops = ({ title, subTitle}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
  );
};

//make this component available to the app
export default HeaderWithProps;

