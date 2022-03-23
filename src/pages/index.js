import { graphql, Link } from "gatsby";
import React from "react";

const IndexPage = ({ data }) => {
  return (
    <ul>
      {data.allShopifyProduct.nodes.map((product) => (
        <li key={product.shopifyId}>
          <Link to={product.handle}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export const productQuery = graphql`
  query MyQuery {
    allShopifyProduct {
      nodes {
        title
        shopifyId
        handle
      }
    }
  }
`;

export default IndexPage;
