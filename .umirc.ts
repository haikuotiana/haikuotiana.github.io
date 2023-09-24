import { defineConfig } from 'dumi';

export default defineConfig({
  title: ' ',
  favicon: 'https://avatars.githubusercontent.com/u/37130892?v=4',
  logo: 'https://avatars.githubusercontent.com/u/37130892?v=4',
  outputPath: 'dist',
  base: '/',
  publicPath: '/',
  mode: 'site',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '参与项目',
      path: 'https://github.com/haikuotiana/haikuotiana.github.io',
    },
  ],

  // more config: https://d.umijs.org/config
});
