export default [
  {
    exact: true,
    path: '/',
    component: '@/pages/index',
  },
  {
    exact: true,
    path: 'post/',
    component: '@/pages/post/',
  },
  {
    exact: true,
    path: 'post/:id',
    component: '@/pages/post/PostDeatil',
  },
  { component: '@/pages/404' },
];

