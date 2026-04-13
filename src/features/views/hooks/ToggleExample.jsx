import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

export default function ToggleExample() {

  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <Box>

      <Typography variant="h6">
        Toggle Example (useState)
      </Typography>

      <Button
        variant="contained"
        onClick={toggle}
        sx={{
          mt: 2,
          background: "linear-gradient(45deg,#7b1fa2,#00e5ff)",
          fontWeight: "bold",
          "&:hover": {
            background: "linear-gradient(45deg,#6a1b9a,#00bcd4)"
          }
        }}
      >
        Mostrar / Ocultar
      </Button>

      {visible && (
        <Typography sx={{ mt: 2 }}>
          Este texto aparece y desaparece
        </Typography>
      )}

    </Box>
  );
}