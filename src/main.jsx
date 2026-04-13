import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { FavoritesProvider } from "./features/auth/context/FavoritesContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </StrictMode>
);
