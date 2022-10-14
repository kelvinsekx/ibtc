// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IBTC-JS',
  tagline: "Ibadan Techies Club-JS is a community for devs and all tech professionals. We're starting off with Ibadan",
  url: 'https://ibadan-tech-community.netlify.app', // Url to your site with no trailing slash
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon_io/favicon.ico',
  organizationName: 'Ibadan Techies Club', // Usually your GitHub org/user name.
  projectName: 'IBTC', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/kelvinsekx/ibtc',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/kelvinsekx/ibtc',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-tailwindcss'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'IBTC-JS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon_io/favicon-32x32.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/kelvinsekx/ibtc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'GoFundMe',
                href: 'https://www.gofundme.com/f/ibadan-techies-club-meetup',
                position: 'right'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/badtechys',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kelvinsekx/ibtc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IBTC-JS. Built by kelvinsekx with Love.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
      id: 'we_changed_name',
      content:
        'We are changing the name of this vibrant community from IBadan Tech Community into Ibadan Techies Club. Please, bare with us.</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
    }),
};

module.exports = config;
