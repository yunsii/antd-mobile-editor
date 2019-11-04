export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        component: './Welcome',
      },
      {
        path: '/demo',
        routes: [
          {
            path: '/demo/standard-list',
            component: './Demo/StandardList',
          },
          {
            path: '/demo/form',
            component: './Demo/Form',
          },
          {
            path: '/demo/amap',
            component: './Demo/AMap',
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
