import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './searchClass.module.css';
import { Select, Button, DatePicker, Radio } from 'antd';
import 'antd/dist/antd.css';
import clsx from 'clsx';
import style from './dropdown.module.css';
// import inputSt from './customInput.module.css';
import SearchFieldComp from './SearchFieldComp';

const SearchClass = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleHide = () => {
    setDropdownVisible((prev) => ({ dropdownVisible: !prev.dropdownVisible }));
  };
  console.log(dropdownVisible);

  const handleBlur = (e) => {
    console.log('on blur');
    setDropdownVisible((prev) => ({ dropdownVisible: !prev.dropdownVisible }));
  };

  const { classes } = useSelector((state) => state.studentProps);

  const handleGetStudentOfClass = async () => {};


  const { Option } = Select;
  return (
    <div>
      <Select
        labelInValue
        defaultValue={{ value: 'Choose Class' }}
        style={{ width: 170 }}
      >
        {classes.map((element, key) => (
          <Option key={key}>{element.subject.subject_name}</Option>
        ))}
      </Select>
      <Button style={{ marginLeft: 10 }}>Show</Button>

    </div>
  );
};

export default SearchClass;

      {/*
      <div className={style.dropdownContainer}>
        <div className={style.dropdownTrigger}>
          <i
            className={clsx(styles.searchIcon, 'fas fa-search')}
            onClick={handleHide}
          ></i>
        </div>
         {
        dropdownVisible && <SearchFieldComp /> 
        } */}
{
  /* <div className = {styles.selectContent}>
     <div className = {styles.selectItems}>
        <p className = {styles.selectClass}>Select class</p>
        <select className = {styles.selectOption} >
          {classes.map((element, key) => (
              <option  key={key}>{element.subject.subject_name}</option>
            ))}
        </select>
        <button className = {styles.showButton} onClick={handleGetStudentOfClass}>Show</button>
        </div>
      </div> */
}
