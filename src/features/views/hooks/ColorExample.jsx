import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

export default function ColorExample() {

  const [color, setColor] = useState("purple");

  const cambiarColor = () => {
    setColor(color === "purple" ? "blue" : "purple");
  };

  return (
    <Box>

      <Typography variant="h6">
        Cambiar Color (useState)
      </Typography>

      <Box
        sx={{
          width: 120,
          height: 120,
          backgroundColor: color,
          mt: 2,
          mb: 2,
          borderRadius: "10px"
        }}
      />

      <Button
        variant="contained"
        onClick={cambiarColor}
        sx={{
          background: "linear-gradient(45deg,#7b1fa2,#00e5ff)",
          fontWeight: "bold",
          "&:hover": {
            background: "linear-gradient(45deg,#6a1b9a,#00bcd4)"
          }
        }}
      >
        Cambiar color
      </Button>

    </Box>
  );
}