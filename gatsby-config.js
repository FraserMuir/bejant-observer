const path = require("path");

module.exports = {
  siteMetadata: {
    name: "Bejant Observer",
    title: "Bejant Observer",
    url: "https://bejantobserver.com",
    description: "The alternative independent voice of St Andrews students for a really long time",
    twitterUsername: "@BejantObserver",
    locale: "en_GB",
  },
  flags: {
    DEV_SSR: false,
    FAST_REFRESH: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/media`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/app/posts`,
        name: "posts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/app/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/app/categories`,
        name: "categories",
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),

        app: path.join(__dirname, "src/app"),
        components: path.join(__dirname, "src/components"),
        data: path.join(__dirname, "src/data"),
        helpers: path.join(__dirname, "src/helpers"),
        images: path.join(__dirname, "src/images"),
        styles: path.join(__dirname, "src/styles"),
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/app/cms.js`,
      },
    },
    "gatsby-plugin-netlify",
  ],
};
