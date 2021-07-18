module.exports = {
  siteMetadata: {
    siteUrl: "https://mskf.work",
    title: "blog",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: ['.md','.mdx'],
        gatsbyRemarkPlugins: [
          //add syntax highlighting
          "gatsby-remark-prismjs",

          //copy relative files specified in markdown
          "gatsby-remark-copy-linked-files",

          //GitHub-style hover links
          "gatsby-remark-autolink-headers"
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/`
      }
    },
  ],
};
