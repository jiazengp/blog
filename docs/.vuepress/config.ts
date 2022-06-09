import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { seoPlugin } from 'vuepress-plugin-seo2'
import { redirectPlugin } from 'vuepress-plugin-redirect'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'
import { pwaPlugin } from 'vuepress-plugin-pwa2'
import { componentsPlugin } from 'vuepress-plugin-components'
import { clipboardPlugin } from 'vuepress-plugin-clipboard'
import { commentPlugin } from "vuepress-plugin-comment2";
import commentTheme from './theme-config'

const base = (process.env.BASE || '/') as '/' | `/${string}/`
const isProd = process.env.NODE_ENV === 'production'
const hostname = 'https://zengjia.site'

export default defineUserConfig({
  base: `${base}`,
  dest: './dist',
  shouldPrefetch: false,
  bundler:
    process.env.DOCS_BUNDLER === 'webpack' || isProd
      ? webpackBundler()
      : viteBundler(),
  head: [
    ['meta', { name: 'renderer', content: 'webkit' }],
    ['meta', { name: 'force-rendering', content: 'webkit' }],
    ['meta', { name: 'applicable-device', content: 'pc,mobile' }],
    ['meta', { name: 'msapplication-titleColor', content: '#2474b5' }],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'lack-translucent',
      },
    ],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'ZengJia' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
    ['meta', { name: 'google', content: 'notranslate' }],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/imgs/avatar/apple-touch-icon.png' },
    ],
    ['link', { rel: 'shortcut icon', href: '/imgs/avatar/avatar.png' }],
  ],
  // site-level locales config
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Zeng Jia',
      description: '(^_^)',
    },
  },
  // theme-level locales config
  theme: commentTheme,
  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5],
    },
  },
  plugins: [
    seoPlugin({
      hostname,
      author: {
        name: 'ZENGJIA',
        url: 'https://github.com/jiazengp',
      },
      fallBackImage: 'https://zengjia.site/imgs/avatar/avatar.png',
      canonical: 'https://zengjia.site/',
      restrictions: '13+',
      twitterID: 'ZengJia_',
    }),
    redirectPlugin({
      hostname,
      // config: (app) =>
      //   Object.fromEntries(
      //     app.pages
      //       .filter((page) => page.path.startsWith("/posts/"))
      //       .map((page) => [page.path.replace(/^\/posts\//, "/post/"), page.path])
      //   ),
    }),
    sitemapPlugin({
      hostname,
    }),
    componentsPlugin({
      components: ['CodePen', 'FontIcon', 'PDF', 'StackBlitz'],
      backToTop: false,
      addThis: false,
    }),
    pwaPlugin({
      favicon: 'https://zengjia.site/imgs/avatar/favicon.ico',
      themeColor: '#2474b5',
      apple: {
        icon: 'https://zengjia.site/imgs/avatar/apple-touch-icon-152x152.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: 'https://zengjia.site/imgs/avatar/mstile-310x310.png',
      },
    }),
    clipboardPlugin({
      staticIcon: false,
      align: 'top',
    }),
    commentPlugin({
      provider: 'Waline',
      serverURL: 'https://waline.zengjia.site',
      dark: 'html.dark',
      requiredMeta: ['nick'],
      copyright: false
    }),
  ],
  define: () => ({
    IS_NETLIFY: 'NETLIFY' in process.env,
  }),
})
