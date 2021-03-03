// Module dependency

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  CONTENTSTACK_API_KEY,
  CONTENTSTACK_DELIVERY_TOKEN,
  CONTENTSTACK_ENVIRONMENT,
  CONTENTSTACK_CDN,
  CONTENTSTACK_HOSTED_URL,
} = process.env

const hostedUrl = CONTENTSTACK_HOSTED_URL || "http://localhost:9000"

module.exports = {
  siteMetadata: {
    title: "Gatsby Sample App",
    description: "This is a sample app build using Gatsby and Contentstack",
    author: "Contentstack",
    siteUrl: hostedUrl,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: hostedUrl,
        sitemap: `${hostedUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", disallow: ["/"] }],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Contentstack-Gatsby-Starter-App",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/contentstack.png", // This path is relative to the root of the site.
      },
    },

    {
      resolve: "gatsby-source-contentstack",
      options: {
        api_key: CONTENTSTACK_API_KEY,
        delivery_token: CONTENTSTACK_DELIVERY_TOKEN,
        environment: CONTENTSTACK_ENVIRONMENT,
        cdn: CONTENTSTACK_CDN || "",
        // Optional: expediteBuild set this to either true or false
        expediteBuild: true,
        // Optional: Specify true if you want to generate custom schema
        enableSchemaGeneration: true,
        // Optional: Specify a different prefix for types. This is useful in cases where you have multiple instances of the plugin to be connected to different stacks.
        type_prefix: "Contentstack", // (default),
        downloadAssets: true,
      },
    },
  ],
}
