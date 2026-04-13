import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Box, Typography, TextField, InputAdornment, IconButton, Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useFavorites } from "../../auth/context/FavoritesContext";

export const Header = () => {
  const { favorites } = useFavorites(); // Este estado siempre refleja localStorage

  return (
    <AppBar position="static" sx={{ background: "linear-gradient(90deg, #0b3d91, #0f4fa3)" }}>
      <Toolbar sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", justifyContent: "space-between", gap: { xs: 1, sm: 2 } }}>
        <Typography variant="h6" sx={{ color: "#e0f2fe", fontWeight: 800, letterSpacing: 1, mb: { xs: 1, sm: 0 } }}>
          Nuzlux Store Plus
        </Typography>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", gap: { xs: 1, sm: 2 }, mb: { xs: 1, sm: 0 } }}>
          <Button color="inherit" component={NavLink} to="/">Inicio</Button>
          <Button color="inherit" component={NavLink} to="/articles">Articulos</Button>
          <Button color="inherit" component={NavLink} to="/offers">Ofertas</Button>
          <Button color="inherit" component={NavLink} to="/games">Juegos</Button>
          <Button color="inherit" component={NavLink} to="/hooks">Hooks</Button>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <TextField
          size="small"
          placeholder="Buscar Productos..."
          variant="outlined"
          sx={{ bgcolor: "rgba(255,255,255,0.08)", borderRadius: "20px", minWidth: { xs: "100%", sm: 250 }, input: { color: "#c9ffe1" }, mb: { xs: 1, sm: 0 } }}
          slotProps={{ input: { startAdornment: (<InputAdornment position="start"><SearchIcon sx={{ color: "#9ae6b4" }} /></InputAdornment>) } }}
        />

        <Box sx={{ display: "flex", gap: 1, mt: { xs: 1, sm: 0 } }}>
          {/* Badge de favoritos siempre refleja el número real */}
          <IconButton sx={{ color: "#00e5ff" }} component={NavLink} to="/myfavorites">
            <Badge badgeContent={favorites.length} color="secondary" showZero>
              <FavoriteIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "#00e5ff" }}><ShoppingBagIcon /></IconButton>

          <IconButton sx={{ color: "#00e5ff" }} component={NavLink} to="/myaccount">
          <PersonOutlineIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};