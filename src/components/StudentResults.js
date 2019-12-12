import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

class StudentResults extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Students Results </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});

export default StudentResults;
