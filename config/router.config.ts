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
            redirect: '/demo/gaea-page',
          },
          {
            path: '/demo/1',
            component: './Demo/Demo1',
          },
          {
            path: '/demo/2',
            component: './Demo/Demo2',
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
