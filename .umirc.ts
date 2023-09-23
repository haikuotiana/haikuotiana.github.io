import { defineConfig } from 'dumi';

export default defineConfig({
  title: ' ',
  // favicon: 'http://cdn.dooring.cn/dr/fast.png',
  // logo: 'http://cdn.dooring.cn/dr/fast.png',
  outputPath: 'dist',
  base: '/blog/',
  publicPath: '/blog/',
  mode: 'site',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '参与项目',
      path: 'https://github.com/haikuotiana/blog',
    },
  ],

  // more config: https://d.umijs.org/config
});
