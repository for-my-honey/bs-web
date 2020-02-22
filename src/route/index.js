import Dashboard from '../components/dashboard';
import User from '../components/user';
import Login from '../components/login';
import App from '../App';

const routes = [
  {
    path: '/',
    component: Login,
    exact: true,
  },
  {
    path: '/app',
    component: App,
    children: [
      {
        path: '/app/dashboard',
        component: Dashboard
      },
      {
        path: '/app/user',
        component: User
      }
    ]
  },
];

export default routes;