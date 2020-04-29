/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'The Tumbling Wheels',
    author: 'Joanna Tomassoni',
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Jacques Francois Shadow' 
          },
          {
            family: 'Cardo'
          },
          {
            family: 'PT Serif'
          },
          {
            family: 'Merriweather'
          },
          {
            family: 'Inter'
          }
        ]
      }
    }
  ]
}
