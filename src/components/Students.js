import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, FlatList} from 'react-native';
import {getStudents} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';

class Students extends Component {
  componentDidMount() {
    this.props.getStudents();
  }


  render() {
    return (
      <View style={styles.container}>
        <Text> Retrieve Students Results </Text>
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

function mapStateToProps(state) {
  const listStudent = _.map(state.studentsResult.studentsResult, (val, key) => {
    return {
      ...val,
      key:key
    }
  });

  return {
    listStudent
  };
}

export default connect(mapStateToProps, {getStudents})(Students);
