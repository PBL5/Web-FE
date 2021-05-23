import {
  SET_ALL_CLASSES,
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
