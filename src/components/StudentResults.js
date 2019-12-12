import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class StudentResults extends Component {
  state = {
    name: "",
    age: "",
    address: "",
    gender: "",
    subjects: ""

  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Students Results </Text>
        <TextInput placeholder="student name" onChangeText={name => this.setState({name})} value={this.state.name}/>
        <TextInput placeholder="age" onChangeText={age => this.setState({age})} value={this.state.age}/>
        <TextInput placeholder="address" onChangeText={address => this.setState({address})} value={this.state.address}/>
        <TextInput placeholder="gender" onChangeText={gender => this.setState({gender})} value={this.state.gender}/>
        <TextInput placeholder="subjects" onChangeText={subjects => this.setState({subjects})} value={this.state.subjects}/>
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
