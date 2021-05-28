import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: '/',
          component: '@/pages/home',
        },
        {
          path: '/app1',
          microApp: 'app1',
        },
        {
          path: '/app2',
          microApp: 'app2',
        },
      ],
    },
  ],
  fastRefresh: {},
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1',
          entry: '//localhost:8001',
        },
        {
          name: 'app2',
          entry: '//localhost:8002',
        },
      ],
    },
  },
});
