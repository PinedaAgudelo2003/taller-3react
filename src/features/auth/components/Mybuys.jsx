import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActions,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCarrito } from "../context/carritoContext";

export const Mybuys = () => {
  const {
    carrito,
    agregarCarrito,
    reducirCantidad,
    eliminarCarrito,
    vaciarCarrito,
    totalProductos,
    totalPrecio,
  } = useCarrito();

  if (carrito.length === 0)
    return (
      <Typography sx={{ padding: 4 }}>
        Tu carrito está vacío. Agrega productos para comprarlos.
      </Typography>
    );

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 3, color: "#00e5ff" }}>
        Mi carrito
      </Typography>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, alignItems: "center", mb: 4 }}>
        <Typography variant="body1" sx={{ color: "#c9ffe1" }}>
          Total productos: {totalProductos}
        </Typography>
        <Typography variant="body1" sx={{ color: "#c9ffe1" }}>
          Total precio: ${totalPrecio.toLocaleString("es-CO")}
        </Typography>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={vaciarCarrito}
          sx={{ textTransform: "none", ml: { sm: 2 } }}
        >
          Vaciar carrito
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {carrito.map((producto) => (
          <Card
            key={producto.id}
            sx={{
              width: { xs: "100%", md: "48%" },
              backgroundColor: "rgba(4, 27, 50, 0.96)",
              border: "1px solid rgba(59, 130, 246, 0.25)",
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.22)",
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={producto.imagen}
              alt={producto.nombre}
            />
            <CardContent>
              <Typography variant="h6" sx={{ color: "#d7ffdf" }}>
                {producto.nombre}
              </Typography>
              <Typography variant="body2" sx={{ color: "#c9dfc9", mb: 1 }}>
                Precio unidad: {typeof producto.precio === "number"
                  ? `$${producto.precio.toLocaleString("es-CO")}`
                  : producto.precio}
              </Typography>
              <Typography variant="body2" sx={{ color: "#c9dfc9", mb: 2 }}>
                Cantidad: {producto.cantidad}
              </Typography>
              <Typography variant="body2" sx={{ color: "#c9dfc9" }}>
                Subtotal: ${(
                  (typeof producto.precio === "number"
                    ? producto.precio
                    : Number(producto.precio.replace(/[^0-9.-]+/g, "")) || 0) *
                  producto.cantidad
                ).toLocaleString("es-CO")}
              </Typography>
            </CardContent>
            <Divider sx={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
            <CardActions sx={{ display: "flex", gap: 1, p: 2 }}>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<RemoveIcon />}
                onClick={() => reducirCantidad(producto.id)}
                sx={{ textTransform: "none", flex: 1 }}
              >
                -
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<AddIcon />}
                onClick={() => agregarCarrito(producto)}
                sx={{ textTransform: "none", flex: 1 }}
              >
                +
              </Button>
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => eliminarCarrito(producto.id)}
                sx={{ textTransform: "none", flex: 1 }}
              >
                Eliminar
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
