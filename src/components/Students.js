import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

class Students extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Students </Text>
        <Button title="Edit result" onPress={() => this.props.navigation.navigate('Edit')} />
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

export default Students;
