const remarkExternalUrlRef = require("./src/plugins/remark-externalUrlRef");

import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'DmMaze_personal',
  favicon: 'img/feather.svg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DmMaze', // Usually your GitHub org/user name.
  projectName: 'private_landing', // Usually your repo name.

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        theme: {
          customCss: './src/css/custom.css',
        },
        docs: {
          id: 'default',
          path: 'docs',
          routeBasePath: 'docs',
          breadcrumbs: true,
          // Simple use-case: string editUrl
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          // Advanced use-case: functional editUrl
          editLocalizedFiles: false,
          remarkPlugins: [remarkExternalUrlRef],
          editCurrentVersion: false,
          sidebarPath: 'sidebars.js',
          include: ['**/*.md', '**/*.mdx'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          docsRootComponent: '@theme/DocsRoot',
          docVersionRootComponent: '@theme/DocVersionRoot',
          docRootComponent: '@theme/DocRoot',
          docItemComponent: '@theme/DocItem',
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          disableVersioning: true,
          includeCurrentVersion: true,
          lastVersion: undefined,
          admonitions: {
            keywords: ['support'],
            extendDefaults: true,
          },
        },
        blog: {
          blogTitle: 'Блог',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Блог',
          showReadingTime: true, // When set to false, the "x min read" won't be shown
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 70}}),
        },
      },
    ],
  ],

  plugins: [
    [require.resolve('@easyops-cn/docusaurus-search-local'), {
        // Настройки локального поиска
        hashed: true,
        language: ['en'], // Укажите языки вашей документации
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs', // Должен соответствовать вашему routeBasePath
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
    }],
  ]
  ],

  themeConfig: {
      image: 'img/feather.svg',
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'ed',
          src: 'img/feather.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Блог', position: 'right'},
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: "dark",
        logo: {
          src: "img/feather.svg",
          width: 250,
          height: 50,
        },
        copyright: `Copyright © ${new Date().getFullYear()} DmMaze`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powershell', `http`,'kotlin', 'java', 'swift', 'objectivec', 'groovy', 'textile', 'xml-doc'],
      },
      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: '.markdown img',
        background: {
          light: 'rgb(255, 255, 255, 0.8)',
          dark: 'rgb(50, 50, 50, 0.8)'
        },
      },
    },
};

export default config;
