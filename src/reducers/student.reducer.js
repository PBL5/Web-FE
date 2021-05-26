import dayjs from 'dayjs';
import {
  RESET_FILTER_OPTIONS,
  SET_ALL_CLASSES,
  SET_FILTER_OPTIONS,
  SET_STUDENTS_OF_CLASS
} from 'src/types/students.type';

const default_filter_options = {
  full_name: '',
  student_id: '',
  email: '',
  gender: 'male',
  birthday: ''
};

const initialState = {
  classes: [],
  selectedClassID: 0,
  studentsOfClass: [],
  filterOptions: {
    class_id: 0,
    filter_options: default_filter_options
  }
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_CLASSES:
      return { ...state, classes: action.payload };
    case SET_FILTER_OPTIONS:
      return {
        ...state,
        filterOptions: {
          ...action.payload
        }
      };
    case SET_STUDENTS_OF_CLASS:
      return { ...state, studentsOfClass: action.payload };
    case RESET_FILTER_OPTIONS:
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          filter_options: { ...default_filter_options }
        }
      };
    default:
      return state;
  }
};

export default studentReducer;
