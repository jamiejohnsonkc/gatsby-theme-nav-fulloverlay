module.exports = { plugins: [
  // `gatsby-plugin-theme-ui`,
  `gatsby-theme-jim-theme-ui`,
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      name: `svg`,
      rule: {
        include: /assets/,
      },
    },
  },
],
}
