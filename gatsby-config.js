module.exports = {
  siteMetadata: {
    title: `The Best of FutureGov`,
    author: `@wearefuturegov`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      name: `content`,
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/`,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`name`, `tags`, `practice`, `url`],
        resolvers: {
          ArtefactsYaml: {
            name: node => node.name,
            tags: node => node.tags,
            practice: node => node.practice,
            url: node => node.url
          }
        },
      },
    }
  ],
}
