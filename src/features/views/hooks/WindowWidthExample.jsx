import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

export default function WindowWidthExample() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (
    <>
      <Typography variant="h6">
        Window Width Example
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Ancho de pantalla: {width}px
      </Typography>
    </>
  );
}