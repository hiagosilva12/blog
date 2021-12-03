module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "blog",
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "alldata",
      fieldName: "alldata", 
      url: "https://api-us-east-1.graphcms.com/v2/ckwfayoy422uy01z343w82us4/master",
    },
  }
],
};
