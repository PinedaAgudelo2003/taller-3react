import React, { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

export default function CounterExample() {

  const [count, setCount] = useState(0);

  return (
    <Box>

      <Typography variant="h6">
        Contador (useState)
      </Typography>

      <Typography sx={{ mt: 2, mb: 2 }}>
        Valor actual: {count}
      </Typography>

      <Stack direction="row" spacing={2}>

        <Button
          variant="contained"
          onClick={() => setCount(count + 1)}
          sx={{
            background: "linear-gradient(45deg,#7b1fa2,#00e5ff)",
            fontWeight: "bold",
            "&:hover": {
              background: "linear-gradient(45deg,#6a1b9a,#00bcd4)"
            }
          }}
        >
          Incrementar
        </Button>

        <Button
          variant="contained"
          onClick={() => setCount(count - 1)}
          sx={{
            background: "linear-gradient(45deg,#7b1fa2,#00e5ff)",
            fontWeight: "bold",
            "&:hover": {
              background: "linear-gradient(45deg,#6a1b9a,#00bcd4)"
            }
          }}
        >
          Disminuir
        </Button>

      </Stack>

    </Box>
  );
}