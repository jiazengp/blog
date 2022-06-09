import { i18n } from 'vuepress-theme-gungnir'
import { navbar, sidebar } from './configs'
import { commentTheme } from "./theme";

const isProd = process.env.NODE_ENV === 'production'

export default commentTheme({
  repo: 'jiazengp/blog',
  docsDir: 'docs',

  hitokoto: 'https://v1.hitokoto.cn?c=i',

  // personal information
  personalInfo: {
    name: 'Zeng Jia',
    avatar: 'imgs/avatar/avatar.jpg',
    description: '(^_^)',
    sns: {
      github: 'jiazengp',
      twitter: 'jiazengp',
      zhihu: 'ZENGJIA',
      email: 'jiazengp@gmail.com',
      rss: '/rss.xml',
      // customized sns
      bilibili: {
        icon: 'ri-bilibili-line',
        link: 'https://space.bilibili.com/523431673/',
      },
    },
  },

  // header images on home page
  homeHeaderImages: [
    {
      path: 'https://www.retiehe.com/backend/bing/1080p',
      mask: 'rgba(40, 57, 101, .4)',
    },
  ],

  // other pages
  pages: {
    tags: {
      subtitle: 'Black Sheep Wall',
      bgImage: {
        path: '/imgs/pages/tags.png',
        mask: 'rgba(211, 136, 37, .5)',
      },
    },
    links: {
      subtitle:
        'When you are looking at the stars, please put the brightest star shining night sky as my soul.',
      bgImage: {
        path: '/imgs/pages/links.jpg',
        mask: 'rgba(64, 118, 190, 0.5)',
      },
    },
  },

  // theme-level locales config
  locales: {
    /**
     * Chinese locale config
     *
     * As the default locale is Chinese, we don't need to set all of the locale fields
     */

    '/': {
      navbar: navbar.zh,
      sidebar: sidebar.zh,
      // i18n
      ...i18n.zh
    },
  },

  themePlugins: {
    // only enable git plugin in production mode
    git: isProd,
    katex: true,
    mermaid: true,
    chartjs: true,
    giscus: false,
    mdPlus: {
      all: true,
    },
    ga: 'G-EGKGVV1K3B',
    ba: '5ea120d693a9d0b85d5b98b9e8952bf5',
    rss: {
      siteURL: 'https://zengjia.site',
      title: "ZengJia Blog",
      description: "(^_^)",
      copyright: "© 2018-present Zeng Jia",
      count: 20,  // 需要在生成的 RSS 文件上显示多少篇文章（可选，默认：20）
      filter: (page) => true  // 文章筛选函数（可选，默认：(page) => true）
    },
    readingTime: {
      excludes: [],  // 不需要进行统计的页面路径（可选，默认：[]）
      includes : [],  // 需要进行统计的页面路径，如果指定了这一项，那么 `excludes` 项无效（可选，默认：[]）
      wordsPerMinuteCN: 300,  // 一分钟可以阅读多少个中文字符（可选，默认：300）
      wordsPerMinuteEN: 160,  // 一分钟可以阅读多少个英文字符（可选，默认：160）
      excludeCodeBlock:  false,  // 是否排除所有代码块内的字符（可选，默认：false）
      excludeTexBlock: false    // 是否排除所有公式块内的字符（可选，默认：false）
    },
    pwa: false,
    search: {}
  },

  footer: `
    &copy; <a href="https://github.com/jiazengp" target="_blank">jiazengp</a> 2022-present
  `,
})
