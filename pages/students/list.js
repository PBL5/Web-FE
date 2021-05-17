import StudentsList from 'component/students';
import React from 'react';
import {
  ALL_STUDENT_LIST_ENTRY_POINT,
  apiRequest,
  GET
} from 'src/utils/apiRequest';
import { wrapper } from 'src/store';

const StudentsListPage = () => {
  return <StudentsList />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    try {
      const response = await apiRequest(ALL_STUDENT_LIST_ENTRY_POINT, GET);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }
);

export default StudentsListPage;
