import React, { useContext } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import StoreContext from "../context/store-context";

const Product = ({ data }) => {
  const { addVariantToCart } = useContext(StoreContext);
  return (
    <div>
      <h2>{data.shopifyProduct.title}</h2>
      <div>
        <img
          src={data.shopifyProduct.images[0].originalSrc}
          alt={data.shopifyProduct.title}
        />
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: data.shopifyProduct.descriptionHtml,
        }}
      />
      <span>
        {data.shopifyProduct.priceRangeV2.maxVariantPrice.currencyCode}{" "}
        {data.shopifyProduct.priceRangeV2.maxVariantPrice.amount}
      </span>
      <button onClick={() => addVariantToCart()}>Add to Cart</button>
    </div>
  );
};

const ProductPage = ({ data }) => {
  return (
    <Layout>
      <Product data={data} />
    </Layout>
  );
};

export const query = graphql`
  query ($handle: String) {
    shopifyProduct(handle: { eq: $handle }) {
      title
      shopifyId
      handle
      descriptionHtml
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
      }
    }
  }
`;

export default ProductPage;
