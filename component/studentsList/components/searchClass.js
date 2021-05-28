import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './searchClass.module.css';
import { Select, Button, DatePicker, Radio } from 'antd';
import 'antd/dist/antd.css';
import clsx from 'clsx';
import style from './dropdown.module.css';
// import inputSt from './customInput.module.css';
import SearchFieldComp from './SearchFieldComp';
import {
  setFilterOptions,
  setStudentOfClass
} from 'src/actions/students.action';
import {
  apiRequest,
  POST,
  STUDENT_LIST_ENTRY_POINT
} from 'src/utils/apiRequest';

const SearchClass = () => {
  const {
    classes,
    filterOptions: { class_id, filter_options },
    disableDateField,
    disableGenderField
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

  const { Option } = Select;
  return (
    <div>
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
  );
};

export default SearchClass;
