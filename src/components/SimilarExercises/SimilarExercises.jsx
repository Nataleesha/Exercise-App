import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

import BodyPartList from "../BodyPartList/BodyPartList";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3">
        Exercises targeting the same muscle group
      </Typography>
      <Box sx={{ position: "relative", marginBottom: "70px" }}>
        <BodyPartList data={targetMuscleExercises} />
      </Box>
      <Typography variant="h3">Exercises with the same equipment</Typography>
      <Box sx={{ position: "relative", marginBottom: "70px" }}>
        <BodyPartList data={equipmentExercises} />
      </Box>
    </Box>
  );
};

SimilarExercises.propTypes = {
  targetMuscleExercises: PropTypes.array.isRequired,
  equipmentExercises: PropTypes.array.isRequired,
};

export default SimilarExercises;
