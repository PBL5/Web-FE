import { SET_ALL_CLASSES } from 'src/types/students.type';

const initialState = {
  classes: [],
  selectedClassID: 0,
  studentsOfClass: []
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_CLASSES:
      return { ...state, classes: action.payload };
    default:
      return state;
  }
};

export default studentReducer;
