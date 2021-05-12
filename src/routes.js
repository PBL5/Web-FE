import HomePage from './page';
import SignInPage from './page/auth/signin';
import FetchStudentsPage from './page/students/FetchStudents';

const routes = [
  { component: HomePage, path: '/', exact: true },
  { component: SignInPage, path: '/signin', exact: true },
  { component: FetchStudentsPage, path: '/students/list', exact: true }
];
export default routes;
