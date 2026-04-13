import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { FavoritesProvider } from "./features/auth/context/FavoritesContext";
import { CarritoProvider } from "./features/auth/context/carritoContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoritesProvider>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </FavoritesProvider>
  </StrictMode>
);
