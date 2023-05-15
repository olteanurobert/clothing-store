// React
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Context
import { UserProvider } from "./context/user.context";
import { ProductsProvider } from "./context/products.context";
import { CartProvider } from "./context/cart.context";

//Components
import App from "./App";

// Styles
import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
