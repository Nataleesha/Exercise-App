import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import ExerciseDetails from "./components/pages/Exercisedetails/ExerciseDetails";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetails />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
