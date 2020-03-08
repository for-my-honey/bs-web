import Dashboard from '../components/dashboard';
import User from '../components/user';
import Login from '../components/login';
import Searchsong from '../components/searchsong';
import Uploadsong from '../components/uploadsong';
import Updatesong from '../components/updatesong';
import App from '../App';

const routes = [{
    path: '/',
    component: Login,
    exact: true,
  },
  {
    path: '/app',
    component: App,
    children: [{
        path: '/app/dashboard',
        component: Dashboard
      },
      {
        path: '/app/user',
        component: User
      },
      {
        path: '/app/searchsong',
        component: Searchsong
      },
      {
        path: '/app/uploadsong',
        component: Uploadsong
      },
      {
        path: '/app/updatesong',
        component: Updatesong
      }
    ]
  },
];

export default routes;