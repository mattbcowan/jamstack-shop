require("dotenv").config();

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        accessToken: process.env.SHOPIFY_TOKEN,
      },
    },
    "gatsby-plugin-image",
  ],
};
