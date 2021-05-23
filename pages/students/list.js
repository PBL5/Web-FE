import StudentsList from 'component/students';
import React from 'react';
import { ALL_CLASSES_ENTRY_POINT, apiRequest, GET } from 'src/utils/apiRequest';
import { wrapper } from 'src/store';
import { setAllClasses } from 'src/actions/students.action';

const StudentsListPage = () => {
  return <StudentsList />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    try {
      const response = await apiRequest(ALL_CLASSES_ENTRY_POINT, GET);
      store.dispatch(setAllClasses(response.data));
    } catch (err) {
      console.log(err);
    }
  }
);

export default StudentsListPage;
