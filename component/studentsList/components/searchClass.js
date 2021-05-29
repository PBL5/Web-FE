import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './searchClass.module.css';
import { Select, Button, DatePicker, Radio } from 'antd';
import 'antd/dist/antd.css';
import clsx from 'clsx';
import style from './dropdown.module.css';
// import inputSt from './customInput.module.css';
import {
  setFilterOptions,
  setStudentOfClass
} from 'src/actions/students.action';
import {
  apiRequest,
  CALL_ROLL_ENTRY_POINT,
  CHECK_ATTENDANCE_ENTRY_POINT,
  GET,
  POST,
  STUDENT_LIST_ENTRY_POINT
} from 'src/utils/apiRequest';
import { setIsLoading } from 'src/actions/common.action';

const SearchClass = () => {
  const {
    classes,
    filterOptions: { class_id, filter_options },
    disableDateField,
    disableGenderField,
    studentsOfClass
  } = useSelector((state) => state.studentProps);
  const dispatch = useDispatch();

  /*
   * Get students base on filter options and save to store
   *
   * @event Click button show
   */
  const handleGetStudentOfClass = async () => {
    try {
      const filterOptionPayload = { class_id, filter_options: {} };
      for (const [key, value] of Object.entries(filter_options)) {
        if (key === 'birthday' && disableDateField) continue;
        if (key === 'gender' && disableGenderField) continue;

        if (value !== '') filterOptionPayload.filter_options[key] = value;
      }

      console.log('filterOptionPayload', filterOptionPayload);
      const response = await apiRequest(
        STUDENT_LIST_ENTRY_POINT,
        POST,
        filterOptionPayload
      );

      dispatch(setStudentOfClass(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectClass = ({ key }) => {
    dispatch(
      setFilterOptions({
        class_id: parseInt(key) + 1,
        filter_options
      })
    );
  };

  const handleCallingRoll = async () => {
    dispatch(setIsLoading(true));
    await apiRequest(CALL_ROLL_ENTRY_POINT, GET, {}, { class_id });
    dispatch(setIsLoading(false));
  };

  const handleCheckAttendance = async () => {
    dispatch(setIsLoading(true));
    const response = await apiRequest(
      CHECK_ATTENDANCE_ENTRY_POINT,
      GET,
      {},
      { class_id }
    );
    const studentAttendances = response.data;

    const newStudentOfClass = studentsOfClass.map((element) => {
      const result = studentAttendances.find(
        (e) => e.user_id === element.user_id
      );
      if (result) return { ...result, isAttending: true };
      return { ...element, isAttending: false };
    });

    dispatch(setStudentOfClass(newStudentOfClass));

    dispatch(setIsLoading(false));
  };

  const { Option } = Select;
  return (
    <div className={styles.root}>
      <div className={styles.wrapSearchClass}>
        <Select
          labelInValue
          defaultValue={{ value: 'Choose Class' }}
          style={{ width: 170 }}
          onSelect={handleSelectClass}
        >
          {classes.map((element, key) => (
            <Option key={key}>{element.subject.subject_name}</Option>
          ))}
        </Select>
        <Button style={{ marginLeft: 10 }} onClick={handleGetStudentOfClass}>
          Show
        </Button>
      </div>
      <div className={styles.wrapStartBtn}>
        <Button style={{ marginLeft: 10 }} onClick={handleCallingRoll}>
          Start calling the roll
        </Button>
        <Button onClick={handleCheckAttendance}>Check attendances</Button>
      </div>
    </div>
  );
};

export default SearchClass;
