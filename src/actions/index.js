import firebase from '../../firebase';

export function getStudents() {
  return dispatch => {
    firebase.database().ref('/students').on('value', snapshot => {
      dispatch({
        type: 'STUDENT_FETCH',
        payload: snapshot.val(),
      });
    });
  };
}

export function postStudents(name, age, address, gender, subjects) {
  return (dispatch) => {
    firebase.database().ref('/students').push({name, age, address, gender, subjects});
  }
}

export function deleteStudents(key) {
  return (dispatch) => {
    firebase.database().ref(`/students/${key}`).remove();
  }
}

export function editStudents(name, age, address, gender, subjects, key) {
  return (dispatch) => {
    firebase.database().ref(`/students`).child(key).update(name, age, address, gender, subjects);
  }
}
