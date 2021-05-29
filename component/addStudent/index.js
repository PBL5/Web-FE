import React from 'react';
import styles from './index.module.css';
import validateInput from 'component/auth/signin/handleform/validateInput';
import handleForm from 'component/auth/signin/handleform/handleForm';
import { Radio, DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import Dialog from 'component/common/dialog';

const AddStudents = () => {
  const {
    handleChange,
    dataSignIn,
    errors,
    handleAddStudents,
    handleClear,
    openSuccessfulDialog,
    setOpenSuccessulDialog
  } = handleForm({ validateInput });

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
            value={dataSignIn.full_name}
            onChange={handleChange}
          />
          {errors.fullnameError && <p>{errors.fullnameError}</p>}
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
            value={dataSignIn.email}
            onChange={handleChange}
          />
          {errors.emailError && <p>{errors.emailError}</p>}
        </div>

        <div className={styles.formInputs}>
          <label htmlFor='gender' className={styles.formLabel}>
            Gender
          </label>
          <br />
          <Radio.Group
            name='gender'
            defaultValue={1}
            v-model='value'
            value={dataSignIn.gender}
            onChange={handleChange}
          >
            <Radio value='male' key={1}>
              Male
            </Radio>
            <Radio value='female' key={0}>
              Female
            </Radio>
          </Radio.Group>
          {errors.genderError && <p>{errors.genderError}</p>}
        </div>
        <div className={styles.formInputs}>
          <label htmlFor='date' className={styles.formLabel}>
            Date of birth
          </label>
          <br />
          <DatePicker
            style={{ width: 200 }}
            id='dob'
            name='dob'
            format='DD-MM-YYYY'
            allowClear={false}
            value={
              dataSignIn.dob === ''
                ? moment()
                : moment(dataSignIn.dob, 'YYYY-MM-DD')
            }
            onChange={(date, text) =>
              handleChange({
                target: {
                  name: 'dob',
                  value: moment(date).format('YYYY-MM-DD')
                }
              })
            }
          />
          {/* {errors.dobError && <p>{errors.dobError}</p>} */}
        </div>
        <div className={styles.formInputs}>
          <label htmlFor='password' className={styles.formLabel}>
            Password
          </label>
          <input
            id='password'
            type='password'
            name='password'
            className={styles.formInput}
            placeholder='Password'
            value={dataSignIn.password}
            onChange={handleChange}
          />
          {errors.passwordError && <p>{errors.passwordError}</p>}
        </div>
        <div className={styles.btn}>
          <button className={styles.formInputBtn} onClick={handleAddStudents}>
            Save
          </button>

          <button className={styles.clearBtn} onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
      {openSuccessfulDialog && (
        <Dialog>
          <div className={styles.dialogRoot}>
            <div>
              <label className={styles.dialogLabel}>
                Add student successfully
              </label>
            </div>
            <div>
              <button
                className={styles.dialogButton}
                onClick={() => setOpenSuccessulDialog(false)}
              >
                OK
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default AddStudents;
