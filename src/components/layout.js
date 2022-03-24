import React, { useState } from "react";
import StoreContext, { defaultStoreContext } from "../context/store-context";

const Layout = ({ children }) => {
  const [state, setState] = useState({
    store: {
      ...defaultStoreContext,
      addVariantToCart: (variantId, quantity) => {
        console.log("adding to cart");
      },
      removeLineItem: (client, checkoutID, lineItemId) => {
        console.log("removing from cart");
      },
      updateLineItem: (client, checkoutID, lineItemId, quantity) => {
        console.log("updating cart");
      },
    },
  });
  return (
    <StoreContext.Provider value={state.store}>
      {children}
    </StoreContext.Provider>
  );
};

export default Layout;
