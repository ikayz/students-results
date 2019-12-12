import firebase from '../../firebase';

export function getStudents() {
  return dispatch => {
    firebase.database.ref('/students').on('value', snapshot => {
      dispatch({
        type: 'STUDENT_FETCH',
        payload: snapshot.val(),
      });
    });
  };
}
