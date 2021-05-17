import StudentsList from 'component/students';
import React from 'react';
import { wrapper } from 'src/utils/store';

const StudentsListPage = () => {
  return <StudentsList />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
  }
);

export default StudentsListPage;
