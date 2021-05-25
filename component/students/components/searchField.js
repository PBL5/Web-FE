import React, { useState } from 'react';
import { DatePicker, Radio } from 'antd';
import 'antd/dist/antd.css';
import inputSt from './customInput.module.css';
import clsx from 'clsx'
import moment from 'moment'

const SearchField = () => {
  const [searchValue, setSearchValue] = useState({
    fullname: '',
    id: '',
    email: '',
    gender: '',
    dob: '',
  });
    const handleClear = (e) =>{
      setSearchValue({
        fullname: '',
        id: '',
        email: '',
        gender: e.target.defaultValue,
        dob: '',
      })
        
    }
    const handleChange = (e) => {
      const {name, value} = e.target
      setSearchValue({
          ...searchValue,
          [name]: value
      })
      };
    const dateFormat = 'DD/MM/YYYY';

    // console.log(searchValue.dob)
    // console.log(searchValue.fullname)
    // console.log(searchValue.id)
    // console.log(searchValue.email)
    // console.log(searchValue.gender)

  return (
    <div className={inputSt.dropdownBody}>
      <i className={clsx(inputSt.searchIcon, 'fa fa-search')}></i>
      <div className={inputSt.formInputs}>
        <label htmlFor='fullname' className={inputSt.formLabel}>
          Full name
        </label>
        <input
        value = {searchValue.fullname}
        onChange={handleChange}
          type='text'
          placeholder='Enter fullname'
          name='fullname'
          className={inputSt.formInput}
        ></input>
      </div>

      <div className={inputSt.formInputs}>
        <label htmlFor='id' className={inputSt.formLabel}>
          Student ID
        </label>
        <input
        value = {searchValue.id}
        onChange={handleChange}
          type='text'
          placeholder='Enter student ID'
          name='id'
          className={inputSt.formInput}
        ></input>
      </div>

      <div className={inputSt.formInputs}>
        <label htmlFor='email' className={inputSt.formLabel}>
          Email
        </label>
        <input
        value = {searchValue.email}
        onChange={handleChange}
          type='text'
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
        // value = {searchValue.gender}
        onChange={handleChange}>
          <Radio value={1} key = {1}  >Male</Radio>
          <Radio value={0} key = {0}>Female</Radio>
        </Radio.Group>
      </div>

      <div>
        <label className={inputSt.formLabel}>Date of birth</label>
        <br />
        <DatePicker 
        style={{ width: 200 }} 
        id='date' 
        name='date'
        defaultValue={moment()} 
        format={dateFormat}
        value = {searchValue.dob}
        // onChange={(date, text) => )
         />
      </div>
      <div>
          <button className = {inputSt.clearBtn} onClick = {handleClear}>Clear</button>
          <button className = {inputSt.formInputBtn}>Search</button>
      </div>
    </div>
  );
};

export default SearchField;
