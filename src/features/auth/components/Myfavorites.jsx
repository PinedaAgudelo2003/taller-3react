import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavorites } from "../../auth/context/FavoritesContext";

export const Myfavorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) return <Typography sx={{ padding: 4 }}>No tienes productos en favoritos.</Typography>;

  return (
    <Box sx={{ padding: 4, display: "flex", flexWrap: "wrap", gap: 3 }}>
      {favorites.map(producto => (
        <Card key={producto.id} sx={{ width: { xs: "100%", sm: "45%", md: "22%" }, backgroundColor: "rgba(4, 27, 50, 0.96)", border: "1px solid rgba(59, 130, 246, 0.25)", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.22)", borderRadius: 3, overflow: "hidden" }}>
          <CardMedia component="img" height="200" image={producto.imagen} alt={producto.nombre} />
          <CardContent>
            <Typography variant="h6" sx={{ color: "#d7ffdf" }}>{producto.nombre}</Typography>
            <Typography variant="body2" sx={{ color: "#c9dfc9" }}>{producto.precio}</Typography>
            <Button variant="contained" color="secondary" startIcon={<FavoriteIcon />} fullWidth onClick={() => removeFavorite(producto.id)} sx={{ mt: 2, backgroundColor: "#2563eb", color: "#fff", textTransform: "none", "&:hover": { backgroundColor: "#1d4ed8" } }}>
              Quitar de favoritos
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};