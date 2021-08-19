import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import { Select, Button } from 'antd';
import 'antd/dist/antd.css';
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
import AddStudentToClass from '../addStudentToClass/index';
import { getStudentList } from 'src/utils/studentList';

const SearchClass = () => {
  const [addStudentVisible, setAddStudentVisible] = useState(false);

  const {
    classes,
    filterOptions: { class_id, filter_options },
    disableDateField,
    disableGenderField,
  } = useSelector((state) => state.studentProps);
  const dispatch = useDispatch();

  /*
   * Get students base on filter options and save to store
   */
  const handleGetStudentOfClass = async () => {
    dispatch(setIsLoading(true));
    try {
      const filterOptionPayload = { class_id, filter_options: {} };
      for (const [key, value] of Object.entries(filter_options)) {
        if (key === 'birthday' && disableDateField) continue;
        if (key === 'gender' && disableGenderField) continue;

        if (value !== '') filterOptionPayload.filter_options[key] = value;
      }

      const studentList = await getStudentList(filterOptionPayload);

      dispatch(setStudentOfClass(studentList));
    } catch (err) {
      console.log(err);
    }
    dispatch(setIsLoading(false));
  };

  const handleSelectClass = ({ key }) => {
    dispatch(
      setFilterOptions({
        class_id: classes[key].class_id,
        filter_options
      })
    );
  };

  const handleCheckAttendance = async () => {
    dispatch(setIsLoading(true));

    await apiRequest(CALL_ROLL_ENTRY_POINT, GET, {}, { class_id });

    const studentList = await getStudentList({ class_id });
    dispatch(setStudentOfClass(studentList));

    dispatch(setIsLoading(false));
  };

  const handleOpenAddStudentModal = () => {
    setAddStudentVisible(true);
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
        <Button
          style={{ marginLeft: 10 }}
          onClick={handleOpenAddStudentModal}
          disabled={class_id === 0}
        >
          Add student
        </Button>
      </div>
      <div className={styles.wrapStartBtn}>
        <Button onClick={handleCheckAttendance}>Check attendances</Button>
      </div>
      <AddStudentToClass
        addStudentVisible={addStudentVisible}
        setAddStudentVisible={setAddStudentVisible}
      />
    </div>
  );
};

export default SearchClass;
