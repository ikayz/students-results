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
        <TextInput style={styles.inputView} placeholder="student name" onChangeText={name => this.setState({name})} value={this.state.name}/>
        <TextInput style={styles.inputView} placeholder="age" onChangeText={age => this.setState({age})} value={this.state.age}/>
        <TextInput style={styles.inputView} placeholder="address" onChangeText={address => this.setState({address})} value={this.state.address}/>
        <TextInput style={styles.inputView} placeholder="gender" onChangeText={gender => this.setState({gender})} value={this.state.gender}/>
        <TextInput style={styles.inputView} placeholder="subjects" onChangeText={subjects => this.setState({subjects})} value={this.state.subjects}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  inputView: {
    marginTop: 15,
    height: 40,
    borderColor: '#069',
    borderRadius: 5,
    borderWidth: 1,
  }
});

export default StudentResults;
