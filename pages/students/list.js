import StudentsList from 'component/studentsList';
import React from 'react';
import { ALL_CLASSES_ENTRY_POINT, apiRequest, GET } from 'src/utils/apiRequest';
import { wrapper } from 'src/store';
import { setAllClasses } from 'src/actions/students.action';
import { useSelector } from 'react-redux';
import Loading from 'component/common/loading';

const StudentsListPage = () => {
  const { isLoading } = useSelector((state) => state.commonProps);
  return (
    <>
      <StudentsList />
      {isLoading && <Loading />}
    </>
  );
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
