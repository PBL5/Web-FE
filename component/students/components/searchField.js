import React from 'react';
import { DatePicker, Radio } from 'antd';
import 'antd/dist/antd.css';
import inputSt from './customInput.module.css';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetFilterOptions,
  setFilterOptions
} from 'src/actions/students.action';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import moment from 'moment';
import {
  apiRequest,
  POST,
  STUDENT_LIST_ENTRY_POINT
} from 'src/utils/apiRequest';

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
        if (value !== '')
          filterOptionPayload.filter_options[key] = value;
      }

      const response = await apiRequest(
        STUDENT_LIST_ENTRY_POINT,
        POST,
        filterOptionPayload
      );
      console.log(response.data)
    } catch (err) {
      console.log(err);
    }
  };

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
        </label>
        <br />
        <Radio.Group
          name='gender'
          defaultValue={1}
          v-model='value'
          value={filter_options.gender}
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
        <label className={inputSt.formLabel}>Date of birth</label>
        <br />
        <DatePicker
          style={{ width: 200 }}
          id='date'
          name='date'
          format={dateFormat}
          value={
            filter_options.birthday === ''
              ? moment()
              : moment(filter_options.birthday, 'YYYY-MM-DD')
          }
          onChange={(date, text) =>
            handleChange({ target: { name: 'birthday', value: moment(date).format('YYYY-MM-DD') } })
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
