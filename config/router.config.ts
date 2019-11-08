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
            path: '/demo/gaea-page',
            component: './Demo/GaeaPage',
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
