import { useState } from "react";
import { TextField, Typography } from "@mui/material";

export default function InputExample() {

  const [texto, setTexto] = useState("");

  return (
    <>
      <Typography variant="h6">Input Example</Typography>

      <TextField
        label="Escribe algo"
        variant="outlined"
        fullWidth
        sx={{ mt: 2 }}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <Typography sx={{ mt: 2 }}>
        Texto: {texto}
      </Typography>
    </>
  );
}