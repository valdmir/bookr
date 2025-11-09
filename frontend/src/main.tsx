import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Theme } from "@radix-ui/themes";
import App from "./App.tsx";
import "@radix-ui/themes/styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");
createRoot(root).render(
  <Theme>
    <StrictMode>
      <App />
    </StrictMode>
  </Theme>,
);
