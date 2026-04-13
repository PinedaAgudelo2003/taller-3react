import { useState } from "react";
import { Button, Snackbar, Alert } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCarrito } from "../context/carritoContext";

const CartButton = ({ producto }) => {
  const { agregarCarrito } = useCarrito();
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    agregarCarrito(producto);
    setOpen(true);
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<ShoppingCartIcon />}
        sx={{
          flex: 1,
          backgroundColor: "#2563eb",
          color: "#fff",
          textTransform: "none",
          "&:hover": { backgroundColor: "#1d4ed8" },
        }}
        onClick={handleAddToCart}
      >
        Comprar
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {producto.nombre} agregado al carrito
        </Alert>
      </Snackbar>
    </>
  );
};

export default CartButton;
