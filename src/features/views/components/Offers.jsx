import { Box, Typography, Card, CardContent, CardMedia, CardActions, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavorites } from "../../auth/context/FavoritesContext";
const ofertas = [
  { id: 10, nombre: "Teclado Mecánico RGB - 20% OFF", imagen: "/imagenes/teclado.jpg", precio: "$280.000" },
  { id: 11, nombre: "Mouse Gamer - 15% OFF", imagen: "/imagenes/mouse1.jpg", precio: "$153.000" },
  { id: 12, nombre: "Silla Gamer - 10% OFF", imagen: "/imagenes/sillagamer.jpg", precio: "$810.000" },
  { id: 13, nombre: "Micrófono Gamer - 25% OFF", imagen: "/imagenes/microfono3.jpg", precio: "$315.000" }
];

export default function Offers() {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const renderProductos = (lista) => (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, marginBottom: 6 }}>
      {lista.map((producto) => (
        <Card key={producto.id} sx={{ width: { xs: "100%", sm: "45%", md: "22%" }, backgroundColor: "rgba(4, 27, 50, 0.96)", border: "1px solid rgba(59, 130, 246, 0.25)", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.22)", transition: "0.3s", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRadius: 3, overflow: "hidden", "&:hover": { transform: "scale(1.05)" } }}>
          <CardMedia component="img" height="200" image={producto.imagen} alt={producto.nombre} loading="lazy" />
          <CardContent>
            <Typography variant="h6" sx={{ color: "#d7ffdf" }}>{producto.nombre}</Typography>
            <Typography variant="body2" sx={{ color: "#c9dfc9" }}>{producto.precio}</Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", gap: 2, padding: 2 }}>

  <Button
    variant="contained"
    startIcon={<ShoppingCartIcon />}
    sx={{
      flex: 1,
      background: "linear-gradient(45deg,#2563eb,#1d4ed8)",
      color: "#fff",
      textTransform: "none",
      fontWeight: "bold"
    }}
  >
    COMPRAR
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

</CardActions>
        </Card>
      ))}
    </Box>
  );

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 3, color: "#00e5ff", textTransform: "uppercase" }}>Ofertas 🔥</Typography>
      {renderProductos(ofertas)}
    </Box>
  );
}