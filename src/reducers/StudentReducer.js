export default function(state = {}, action) {
  switch (action.type) {
    case 'STUDENT_FETCH':

      return {
        ...state,
        studentsResult: action.payload,
      };

    default:
      return state;
  }
}
