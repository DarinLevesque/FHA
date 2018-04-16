module.exports = {
  siteMetadata: {
    title: "Fair Housing Advocates, Inc."
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Fair Housing Advocates, Inc.",
        short_name: "FHA Inc.",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#228844",
        display: "minimal-ui",
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 660
            }
          }
        ]
      }
    },
    `gatsby-plugin-stripe-elements`,
    `gatsby-plugin-glamor`,
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: []
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: "gatsby-plugin-purify-css",
      options: {
        /* Defaults */
        styleId: "gatsby-inlined-css",
        purifyOptions: {
          info: true,
          minify: true
        }
      }
    }
  ]
};
