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
