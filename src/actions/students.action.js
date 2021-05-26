import {
  RESET_FILTER_OPTIONS,
  SET_ALL_CLASSES,
  SET_FILTER_OPTIONS,
  SET_STUDENTS_OF_CLASS
} from 'src/types/students.type';

export const setAllClasses = (classes) => {
  return {
    type: SET_ALL_CLASSES,
    payload: classes
  };
};

export const setStudentOfClass = (students) => {
  return {
    type: SET_STUDENTS_OF_CLASS,
    payload: students
  };
};

export const setFilterOptions = (filterOptions) => {
  return {
    type: SET_FILTER_OPTIONS,
    payload: filterOptions
  };
};

export const resetFilterOptions = () => {
  return { type: RESET_FILTER_OPTIONS };
};
