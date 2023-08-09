import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import ExerciseDetails from "./components/pages/Exercisedetails/ExerciseDetails";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetails />} />
          </Route>
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
