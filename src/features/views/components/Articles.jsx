import { Box, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useFavorites } from "../../auth/context/FavoritesContext";

const consolas = [
  { id: 1, nombre: "PlayStation 5", imagen: "/imagenes/ps5.jpg", precio: "$2.800.000" },
  { id: 2, nombre: "PlayStation 4", imagen: "/imagenes/ps4.jpg", precio: "$1.500.000" },
  { id: 3, nombre: "Xbox Series X", imagen: "/imagenes/xbox.jpg", precio: "$2.600.000" },
];

const monitores = [
  { id: 4, nombre: "Monitor Gamer 144Hz", imagen: "/imagenes/monitor.jpg", precio: "$1.200.000" },
  { id: 5, nombre: "Monitor Curvo RGB", imagen: "/imagenes/monitor2.jpg", precio: "$1.350.000" }
];

const perifericos = [
  { id: 6, nombre: "Teclado Mecánico RGB", imagen: "/imagenes/teclado.jpg", precio: "$350.000" },
  { id: 7, nombre: "Mouse Gamer", imagen: "/imagenes/mouse1.jpg", precio: "$180.000" },
  { id: 8, nombre: "Micrófono Gamer", imagen: "/imagenes/microfono3.jpg", precio: "$420.000" },
  { id: 9, nombre: "Silla Gamer", imagen: "/imagenes/sillagamer.jpg", precio: "$900.000" }
];

export default function Articles() {

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const renderProductos = (lista) => (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, marginBottom: 6 }}>
      {lista.map((producto) => {

        const estaEnFavoritos = isFavorite(producto.id);

        return (
          <Card
            key={producto.id}
            sx={{
              width: { xs: "100%", sm: "45%", md: "22%" },
              backgroundColor: "rgba(4, 27, 50, 0.96)",
              border: "1px solid rgba(59, 130, 246, 0.25)",
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.22)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              borderRadius: 3,
              overflow: "hidden",
              "&:hover": { transform: "scale(1.05)" }
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={producto.imagen}
              alt={producto.nombre}
              loading="lazy"
            />

            <CardContent>

              <Typography variant="h6">
                {producto.nombre}
              </Typography>

              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                {producto.precio}
              </Typography>

              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>

  <Button
    variant="contained"
    startIcon={<ShoppingCartIcon />}
    sx={{
      flex: 1,
      backgroundColor: "#2563eb",
      color: "#fff",
      textTransform: "none",
      "&:hover": { backgroundColor: "#1d4ed8" }
    }}
  >
    Comprar
  </Button>

  <Button
    variant={isFavorite(producto.id) ? "outlined" : "contained"}
    color="secondary"
    startIcon={<FavoriteIcon />}
    sx={{ flex: 1 }}
    onClick={() =>
      isFavorite(producto.id)
        ? removeFavorite(producto.id)
        : addFavorite(producto)
    }
  >
    {isFavorite(producto.id) ? "Quitar" : "Añadir a Favoritos"}
  </Button>

</Box>

            </CardContent>
          </Card>
        );

      })}
    </Box>
  );

  return (
    <Box sx={{ padding: 4 }}>

      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Consolas
      </Typography>

      {renderProductos(consolas)}

      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Monitores
      </Typography>

      {renderProductos(monitores)}

      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Periféricos
      </Typography>

      {renderProductos(perifericos)}

    </Box>
  );
}