import {
  apiRequest,
  CHECK_ATTENDANCE_ENTRY_POINT,
  GET,
  POST,
  STUDENT_LIST_ENTRY_POINT
} from './apiRequest';

const checkStudentAttendance = async (class_id, studentList) => {
  // Get attendace status of student
  const response = await apiRequest(
    CHECK_ATTENDANCE_ENTRY_POINT,
    GET,
    {},
    { class_id }
  );
  const studentAttendances = response.data;

  const newStudentOfClass = studentList.map((element) => {
    const result = studentAttendances.find(
      (e) => e.user_id === element.user_id
    );
    if (result) return { ...result, attendanceStatus: true };
    return { ...element, attendanceStatus: false };
  });

  return newStudentOfClass;
};

export const getStudentList = async (filterOptionPayload) => {
  const { class_id } = filterOptionPayload;
  const response = await apiRequest(
    STUDENT_LIST_ENTRY_POINT,
    POST,
    filterOptionPayload
  );

  const newStudentOfClass = await checkStudentAttendance(
    class_id,
    response.data
  );
  return newStudentOfClass;
};
