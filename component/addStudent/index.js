import React, { useState } from 'react';
import styles from './index.module.css';
import { Radio, DatePicker, Modal, Button, Row, Col } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import {
  ADD_STUDENT_ENTRY_POINT,
  apiRequest,
  POST
} from 'src/utils/apiRequest';
import { setIsLoading } from 'src/actions/common.action';
import { useDispatch } from 'react-redux';
import validateInput from 'src/validateInput';

const AddStudents = () => {
  const defaultState = {
    email: '',
    full_name: '',
    gender: 'male',
    birthday: moment().format('YYYY-MM-DD')
  };

  const [studentInfo, setStudentInfo] = useState(defaultState);
  const [errors, setErrors] = useState({});
  const [dialogData, setDialogData] = useState({
    openDialog: false,
    dialogContent: ''
  });

  const dispatch = useDispatch();

  /*
   * Handle changing event of fields
   *
   * @param name {string} name of field
   * @param value {string} value  of field
   *
   * @return nothing update student information
   */
  const handleChange = ({ target: { name, value } }) => {
    setStudentInfo({ ...studentInfo, [name]: value });
  };

  /*
   * Handle add student event
   */
  const handleAddStudents = async () => {
    const errors = validateInput(studentInfo, [
      'email',
      'full_name',
      'gender',
      'birthday'
    ]);
    setErrors(errors);

    if (Object.keys(errors).length > 0) return;

    dispatch(setIsLoading(true));
    try {
      const response = await apiRequest(ADD_STUDENT_ENTRY_POINT, POST, studentInfo);
      dispatch(setIsLoading(false));
      setDialogData({
        openDialog: true,
        dialogContent: `Add student successfully. Student ID is: ${response.data}`
      });
    } catch (err) {
      console.log(err);
      dispatch(setIsLoading(false));
      setDialogData({ openDialog: true, dialogContent: 'Add student failed' });
    }
  };

  const handleClear = () => {
    setStudentInfo(defaultState);
  };

  return (
    <div className={styles.formContent}>
      <div className={styles.form}>
        <div className={styles.formInputs}>
          <label htmlFor='full_name' className={styles.formLabel}>
            Full name
          </label>
          <input
            id='full_name'
            type='text'
            name='full_name'
            className={styles.formInput}
            placeholder='Full name'
            value={studentInfo.full_name}
            onChange={handleChange}
          />
          {errors.full_nameError && <p>{errors.full_nameError}</p>}
        </div>
        <div className={styles.formInputs}>
          <label htmlFor='email' className={styles.formLabel}>
            Email
          </label>
          <input
            id='email'
            type='text'
            name='email'
            className={styles.formInput}
            placeholder='Email'
            value={studentInfo.email}
            onChange={handleChange}
          />
          {errors.emailError && <p>{errors.emailError}</p>}
        </div>
        <Row className={styles.wrapGenderBirthday}>
          <Col span={12}>
            <label htmlFor='gender' className={styles.formLabel}>
              Gender
            </label>
            <br />
            <Radio.Group
              name='gender'
              v-model='value'
              value={studentInfo.gender}
              onChange={handleChange}
            >
              <Radio value='male' key={1}>
                Male
              </Radio>
              <Radio value='female' key={0}>
                Female
              </Radio>
            </Radio.Group>
          </Col>
          <Col span={12}>
            <label htmlFor='date' className={styles.formLabel}>
              Date of birth
            </label>
            <br />
            <DatePicker
              style={{ width: '100%' }}
              id='dob'
              name='dob'
              format='DD-MM-YYYY'
              allowClear={false}
              inputReadOnly={true}
              value={moment(studentInfo.birthday, 'YYYY-MM-DD')}
              onChange={(date) =>
                handleChange({
                  target: {
                    name: 'birthday',
                    value: moment(date).format('YYYY-MM-DD')
                  }
                })
              }
            />
          </Col>
        </Row>

        <div className={styles.btn}>
          <button className={styles.formInputBtn} onClick={handleAddStudents}>
            Save
          </button>

          <button className={styles.clearBtn} onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
      <Modal
        visible={dialogData.openDialog}
        width='300px'
        footer={
          <div className={styles.wrapDialogFooter}>
            <Button
              type='primary'
              onClick={() =>
                setDialogData({ ...dialogData, openDialog: false })
              }
            >
              OK
            </Button>
          </div>
        }
      >
        <p>{dialogData.dialogContent}</p>
      </Modal>
    </div>
  );
};

export default AddStudents;
