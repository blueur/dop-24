import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "DevOps",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  url: "https://dop.davidtang.ch",
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "blueur",
  projectName: "dop",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
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
          label: "Cours",
          position: "left",
        },
        {
          to: "docs/labs",
          label: "Laboratoires",
          position: "left",
        },
        {
          type: "dropdown",
          label: "Liens",
          position: "right",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/blueur",
            },
            {
              label: "GitLab",
              href: "https://gitlab.com/blueur",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/davidtangch/",
            },
            {
              label: "Email",
              href: "mailto:david.tang@heig-vd.ch",
            },
          ],
        },
      ],
    },
    footer: {
      copyright: `<p xmlns:cc="http://creativecommons.org/ns#" >This work © ${new Date().getFullYear()} by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://davidtang.ch" target="_blank">David Tang</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
