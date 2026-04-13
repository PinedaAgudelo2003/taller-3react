import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";

const ClockExample = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6">
        Reloj en tiempo real
      </Typography>

      <Typography>
        {time.toLocaleTimeString()}
      </Typography>
    </Box>
  );
};

export default ClockExample;