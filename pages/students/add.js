import React from 'react';
import AddStudents from 'component/addStudent';
import { useSelector } from 'react-redux';
import Loading from 'component/common/loading';

const StudentAddPage = () => {
  const { isLoading } = useSelector((state) => state.commonProps);
  return (
    <>
      <AddStudents />
      {isLoading && <Loading />}
    </>
  );
};

export default StudentAddPage;
