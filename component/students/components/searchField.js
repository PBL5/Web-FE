import React from 'react';
import { DatePicker, Radio, Switch } from 'antd';
import 'antd/dist/antd.css';
import inputSt from './customInput.module.css';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetFilterOptions,
  setFilterOptions,
  setStudentOfClass,
  disableDateField,
  disableGenderField
} from 'src/actions/students.action';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import moment from 'moment';
import {
  apiRequest,
  POST,
  STUDENT_LIST_ENTRY_POINT
} from 'src/utils/apiRequest';
import { filter } from 'lodash';

dayjs.extend(customParseFormat);

const SearchField = () => {
  const {
    filterOptions: { class_id, filter_options }
  } = useSelector((state) => state.studentProps);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(resetFilterOptions());
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    dispatch(
      setFilterOptions({
        class_id,
        filter_options: { ...filter_options, [name]: value }
      })
    );
  };
  const dateFormat = 'DD/MM/YYYY';

  const handleSearchStudents = async () => {
    try {
      let filterOptionPayload = { class_id, filter_options: {} };
      for (const [key, value] of Object.entries(filter_options)) {
        if (value !== '') filterOptionPayload.filter_options[key] = value;
      }

      const response = await apiRequest(
        STUDENT_LIST_ENTRY_POINT,
        POST,
        filterOptionPayload
      );
      console.log(response.data);
      dispatch(setStudentOfClass(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSwitch = (checked) => {
    console.log('switch button', checked);
    if (!checked) {
      dispatch(disableDateField(checked));
    }
  };
  const { disableDateValue } = useSelector((state) => state.studentProps);
  console.log('disable date', disableDateValue);

  const disableDateChosen = (current) => {
    return current && current > moment().endOf('day');
  };

  const handleSwitchGenderField = (choose) => {
    if (!choose) {
      dispatch(disableDateField(choose));
    }
  };
  const { disableGender } = useSelector((state) => state.studentProps);

  return (
    <div className={inputSt.dropdownBody}>
      <i className={clsx(inputSt.searchIcon, 'fa fa-search')}></i>
      <div className={inputSt.formInputs}>
        <label htmlFor='fullname' className={inputSt.formLabel}>
          Full name
        </label>
        <input
          value={filter_options.full_name}
          onChange={handleChange}
          type='text'
          placeholder='Enter fullname'
          name='full_name'
          className={inputSt.formInput}
        ></input>
      </div>

      <div className={inputSt.formInputs}>
        <label htmlFor='id' className={inputSt.formLabel}>
          Student ID
        </label>
        <input
          value={filter_options.student_id}
          onChange={handleChange}
          type='text'
          placeholder='Enter student ID'
          name='student_id'
          className={inputSt.formInput}
        ></input>
      </div>

      <div className={inputSt.formInputs}>
        <label htmlFor='email' className={inputSt.formLabel}>
          Email
        </label>
        <input
          value={filter_options.email}
          onChange={handleChange}
          type='email'
          placeholder='Enter student email'
          name='email'
          className={inputSt.formInput}
        ></input>
      </div>

      <div>
        <label htmlFor='gender' className={inputSt.formLabel}>
          Gender
          <Switch
            defaultChecked
            onChange={handleSwitchGenderField}
            style={{ marginLeft: 20 }}
          />
        </label>
        <br />
        <Radio.Group
          name='gender'
          defaultValue={1}
          v-model='value'
          value={disableGender === false ? '' : filter_options.gender}
          onChange={handleChange}
        >
          <Radio value='male' key={1}>
            Male
          </Radio>
          <Radio value='female' key={0}>
            Female
          </Radio>
        </Radio.Group>
      </div>

      <div>
        <label className={inputSt.formLabel}>
          Date of birth
          <Switch
            defaultChecked
            onChange={handleSwitch}
            style={{ marginLeft: 20 }}
          />
        </label>
        <br />
        <DatePicker
          disabledDate={disableDateChosen}
          style={{ width: 200 }}
          id='date'
          name='date'
          format={dateFormat}
          value={
            disableDateValue 
              ? moment(filter_options.birthday, 'YYYY-MM-DD')
              : ''
          } 
          onChange={(date, text) =>
            handleChange({
              target: {
                name: 'birthday',
                value: moment(date).format('YYYY-MM-DD')
              }
            })
          }
        />
      </div>
      <div>
        <button className={inputSt.clearBtn} onClick={handleClear}>
          Clear
        </button>
        <button className={inputSt.formInputBtn} onClick={handleSearchStudents}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchField;
