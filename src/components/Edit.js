import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

class Edit extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Edit Student Result </Text>
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

export default Edit;
