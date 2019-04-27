import { publicAssets, cdn } from './url'

// const slickThemeHeader = [
//   {
//     rel: "stylesheet",
//     type: "text/css",
//     charset: "UTF-8",
//     href: cdn.slick.style
//   },
//   {
//     rel: "stylesheet",
//     type: "text/css",
//     href: cdn.slick.theme
//   }
// ]

const materialUIThemeHeader = [
  {
    rel: "stylesheet",
    href: cdn.google.icons.materialUI
  }
]

export const baseHeader = {
  title: "my-react-kit",
  meta: [
    {
      name: "title",
      content: "my-react-kit"
    },
    {
      name: "description",
      content: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `
    }
  ]
}

export const coreLayoutHeader = {
  title: baseHeader.title,
  meta: [
    ...baseHeader.meta,
    {
      name: "robots",
      content: "index, follow"
    }
  ],
  link: [
    {
      rel: "manifest",
      href: publicAssets.manifest
    },
    {
      rel: "shortcut icon",
      href: publicAssets.favicon
    },
    {
      rel: "stylesheet",
      href: cdn.google.fonts.nunitoSans
    }
  ]
}

export const homeHeader = {
  link: [
    // ...slickThemeHeader,
    ...materialUIThemeHeader
  ]
}
