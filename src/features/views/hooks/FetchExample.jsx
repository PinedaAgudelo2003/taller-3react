import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

export default function FetchExample() {

  const [user, setUser] = useState(null);

  const obtenerUsuario = async () => {

    const random = Math.floor(Math.random() * 10) + 1;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${random}`);
    const data = await res.json();

    setUser(data);
  };

  return (
    <Box>

      <Typography variant="h6">
        Fetch Example (API)
      </Typography>

      <Button
        variant="contained"
        onClick={obtenerUsuario}
        sx={{
          mt: 2,
          background: "linear-gradient(45deg,#7b1fa2,#00e5ff)",
          fontWeight: "bold",
          "&:hover": {
            background: "linear-gradient(45deg,#6a1b9a,#00bcd4)"
          }
        }}
      >
        Cargar Usuario
      </Button>

      {user && (
        <Box sx={{ mt: 2 }}>
          <Typography>Nombre: {user.name}</Typography>
          <Typography>Email: {user.email}</Typography>
          <Typography>Ciudad: {user.address.city}</Typography>
        </Box>
      )}

    </Box>
  );
}