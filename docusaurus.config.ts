import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "DevOps",
  favicon: "img/favicon.ico",

  url: "https://dop.davidtang.ch",
  baseUrl: "/",

  i18n: {
    defaultLocale: "fr-CH",
    locales: ["fr-CH"],
  },

  plugins: ["docusaurus-plugin-sass"],

  presets: [
    [
      "classic",
      {
        docs: {
          showLastUpdateTime: true,
          sidebarCollapsed: false,
        },
        theme: {
          customCss: "./src/css/custom.scss",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "DevOps",
      logo: {
        alt: "DevOps",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/lessons",
          html: "<i class='ph ph-presentation'></i> Cours",
          position: "left",
        },
        {
          to: "docs/labs",
          html: "<i class='ph ph-flask'></i> Laboratoires",
          position: "left",
        },
        {
          href: "https://github.com/blueur",
          position: "right",
          className: "ph ph-github-logo",
        },
        {
          href: "https://gitlab.com/blueur",
          position: "right",
          className: "ph ph-gitlab-logo-simple",
        },
        {
          href: "https://www.linkedin.com/in/davidtangch/",
          position: "right",
          className: "ph ph-linkedin-logo",
        },
        {
          href: "mailto:david.tang@heig-vd.ch",
          position: "right",
          className: "ph ph-envelope-simple",
        },
        {
          to: "about",
          position: "right",
          className: "ph ph-info",
        },
      ],
    },
    footer: {
      copyright: `<p xmlns:cc="http://creativecommons.org/ns#" >This work © 2023-${new Date().getFullYear()} by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://davidtang.ch" target="_blank">David Tang</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"></a></p>`,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
