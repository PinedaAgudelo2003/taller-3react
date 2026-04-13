import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#061a2f",
        padding: 4,
        marginTop: 8,
        borderTop: "1px solid rgba(59, 130, 246, 0.15)"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 4
        }}
      >
        {/* Columna 1 */}
        <Box sx={{ maxWidth: 300 }}>
          <Typography variant="h6" sx={{ color: "#bfdbfe" }}>
            Nuzlux Store Plus
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1, color: "#cfe8ff" }}>
            Nuzlux Store Plus es tu tienda online especializada en tecnología,
            accesorios y entretenimiento. Un estilo azul oscuro con brillos modernos.
          </Typography>
        </Box>

        {/* Columna 2 */}
        <Box>
          <Typography variant="h6">Enlaces</Typography>
          <Typography variant="body2">Inicio</Typography>
          <Typography variant="body2">Productos</Typography>
          <Typography variant="body2">Ofertas</Typography>
          <Typography variant="body2">Juegos</Typography>
        </Box>

        {/* Columna 3 */}
        <Box>
          <Typography variant="h6">Contacto</Typography>
          <Typography variant="body2">pinedaagudelob@gmail.com</Typography>
          <Typography variant="body2">Medellín, Colombia</Typography>
        </Box>
      </Box>

      {/* Línea inferior */}
      <Box
        sx={{
          borderTop: "1px solid #222",
          marginTop: 4,
          paddingTop: 2,
          textAlign: "center"
        }}
      >
        <Typography variant="body2" sx={{ color: "#93c5fd" }}>
          © 2026 Nuzlux Store Plus - Creador Brahian Pineda
        </Typography>
      </Box>
    </Box>
  );
}