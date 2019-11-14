export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/gaea',
      },
      {
        path: '/gaea',
        routes: [
          {
            path: '/gaea',
            component: './Gaea',
          },
          {
            path: '/gaea/editor',
            component: './Gaea/Editor',
          },
          {
            path: '/gaea/render',
            component: './Gaea/Render',
          },
        ],
      },
      {
        path: '/demo',
        routes: [
          {
            path: '/demo',
            redirect: '/demo/async',
          },
          {
            path: '/demo/async',
            component: './Demo/AsyncDemo',
          },
          {
            path: '/demo/form',
            component: './Demo/FormDemo',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
