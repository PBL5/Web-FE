import HomePage from "./page";
import SignInPage from "./page/auth/signin";


const routes = [
  { component: HomePage, path: '/', exact: true },
  { component: SignInPage, path: '/signin', exact: true },
//   { component: StudentListPage, path: '/students/list', exact: true }
];
export default routes;
