import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, FlatList, TouchableHighlight} from 'react-native';
import {getStudents, deleteStudents} from '../actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

class Students extends Component {
  componentDidMount() {
    this.props.getStudents();
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList style={{width: '100%'}}
        showsVerticalScrollIndicator={false}
        data={this.props.listStudent} keyExtractor={(item) => item.key}
        renderItem={({item}) => {
          return (
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>Name: {item.name}</Text>
              <Text style={styles.textView2}>Age: {item.age}</Text>
              <Text style={styles.textView2}>Address: {item.address}</Text>
              <Text style={styles.textView2}>Gender: {item.gender}</Text>
              <Text style={styles.textView2}>Subjects: {item.subjects}</Text>
              <View>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Edit', ...item)}>
                  <View>
                    <Button title="Edit" onPress={() => this.props.navigation.navigate('Edit')}/>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight style={{marginTop: 10,}} onPress={() => console.log(item.key)}>
                  <View>
                    <Button title="Delete" onPress={() => this.props.deleteStudents(item.key)}/>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          );
        }}
        />
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
    padding: 5,
  },
  viewStyle: {
    elevation: 6,
    borderRadius: 4,
    backgroundColor: '#069',
    padding: 15,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 20,
    lineHeight: 28,
    color: '#fff',
  },
  textView2: {
    fontSize: 18,
    color: '#fff',
  },
});

function mapStateToProps(state) {
  const listStudent = _.map(state.studentsResult.studentsResult, (val, key) => {
    return {
      ...val,
      key: key,
    };
  });

  return {
    listStudent
  };
}

export default connect(mapStateToProps, {getStudents, deleteStudents})(Students);
