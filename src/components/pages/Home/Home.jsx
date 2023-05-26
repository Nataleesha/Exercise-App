// import { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../../HeroBanner/HeroBanner";
import SearchExercises from "../../SearchExercises/SearchExercises";
import Exercises from "../../Exercises/Exercises";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
