//componentes layout
import { Header } from "./features/layout/components/Header"
import  Content  from './features/layout/components/Content'
import  Footer  from "./features/layout/components/Footer"

//componentes views
import  Articles  from "./features/views/components/Articles"
import  Offers  from "./features/views/components/Offers"
import  Games from "./features/views/components/Games"
import Hooks from "./features/views/components/Hooks"

//componentes auth
import  Myaccount  from "./features/auth/components/Myaccount"
import { Mybuys } from "./features/auth/components/Mybuys"
import { Myfavorites } from "./features/auth/components/Myfavorites"



import { HashRouter, Routes, Route } from "react-router-dom"

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3b82f6",
    },
    secondary: {
      main: "#93c5fd",
    },
    background: {
      default: "#041b2e",
      paper: "#0a2940",
    },
  },
});


function App() {

  return (
  <ThemeProvider theme={theme}>
  <CssBaseline />

    <HashRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/mybuys" element={<Mybuys />} />
        <Route path="/myfavorites" element={<Myfavorites />} />
        <Route path="/games" element={<Games />} />
        <Route path="/hooks" element={<Hooks />} />
      </Routes>
      
      <Footer />
    </HashRouter>

    </ThemeProvider>
  )
}

export default App