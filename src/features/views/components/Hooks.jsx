import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

/* Importamos los ejemplos */

import CounterExample from "../hooks/CounterExample";
import ColorExample from "../hooks/ColorExample";
import ClockExample from "../hooks/ClockExample";
import UserPersistExample from "../hooks/UserPersistExample";

import ToggleExample from "../hooks/ToggleExample";
import InputExample from "../hooks/InputExample";
import WindowWidthExample from "../hooks/WindowWidthExample";
import FetchExample from "../hooks/FetchExample";
import { UseOnlineStatus } from "../hooks/UseOnlineStatus";


const Hooks = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* Título */}
      <Typography
        variant="h4"
        sx={{
          mb: 5,
          fontWeight: "bold",
          color: "#00e5ff",
          textAlign: "center"
        }}
      >
        Ejemplos de React Hooks
      </Typography>

      {/* GRID DE CARDS */}

      <Grid container spacing={4}>

        {/* Counter */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#1f1f1f",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <CounterExample />
            </CardContent>
          </Card>
        </Grid>

        {/* Color */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#1f1f1f",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <ColorExample />
            </CardContent>
          </Card>
        </Grid>

        {/* Clock */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#1f1f1f",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <ClockExample />
            </CardContent>
          </Card>
        </Grid>

        {/* User Persist */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#1f1f1f",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <UserPersistExample />
            </CardContent>
          </Card>
        </Grid>

        {/* Toggle */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#1f1f1f",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <ToggleExample />
            </CardContent>
          </Card>
        </Grid>

        {/* Input */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#1f1f1f",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <InputExample />
            </CardContent>
          </Card>
        </Grid>

        {/* Window width */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#1f1f1f",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <WindowWidthExample />
            </CardContent>
          </Card>
        </Grid>

        {/* Fetch */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#1f1f1f",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <FetchExample />
            </CardContent>
          </Card>
        </Grid>


         <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#1f1f1f",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <UseOnlineStatus/>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

    </Box>
  );
};

export default Hooks;