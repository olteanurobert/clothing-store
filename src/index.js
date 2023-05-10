// React
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Context
import { UserProvider } from "./context/user.context";

// Styles
import "./index.scss";

//Components
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
