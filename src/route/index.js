import Dashboard from '../components/dashboard';
import User from '../components/user';
import Login from '../components/login';
import Searchsong from '../components/searchsong';
import Uploadsong from '../components/uploadsong';
import SongList from '../components/songList';
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
        path: '/app/songList',
        component: SongList
      }
    ]
  },
];

export default routes;