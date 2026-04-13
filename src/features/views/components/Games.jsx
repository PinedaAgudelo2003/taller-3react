import { Box, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavorites } from "../../auth/context/FavoritesContext";
import CartButton from "../../auth/components/CartButton";

const juegos = [
  { id: 17, nombre: "Resident Evil Requiem", imagen: "/imagenes/ResidentEvilRequiem.jpg", precio: "$292.552" },
  { id: 18, nombre: "Grand Theft Auto 5", imagen: "/imagenes/GTA5.jpg", precio: "$180.000" },
  { id: 19, nombre: "Need For Speed Heat", imagen: "/imagenes/NFSHEAT.jpg", precio: "$220.000" },
  { id: 20, nombre: "Hollow Knight: Silksong", imagen: "/imagenes/HollowKnightSilksong.jpg", precio: "$50.000" }
];

export default function Games() {

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
              transition: "0.3s",
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

              <Typography variant="body2">
                {producto.precio}
              </Typography>

             <Box sx={{ display: "flex", gap: 1, mt: 2 }}>

               <CartButton producto={producto} />

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
      <Typography
        variant="h4"
        sx={{ marginBottom: 3, color: "#0ff", textTransform: "uppercase" }}
      >
        Juegos 🎮
      </Typography>

      {renderProductos(juegos)}

    </Box>
  );
}