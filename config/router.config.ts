export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/editor',
      },
      {
        path: '/editor',
        component: './Editor',
      },
      {
        path: '/render',
        component: './Render',
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
        ]
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
