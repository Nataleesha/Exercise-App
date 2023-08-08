import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

import BodyPartList from "../BodyPartList/BodyPartList";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3">
        Exercises targeting the same muscle group
      </Typography>
      <Stack direction="row" sx={{ position: "relative" }}>
        <BodyPartList data={targetMuscleExercises} />
      </Stack>
      <Typography variant="h3">Exercises with the same equipment</Typography>
      <Stack direction="row" sx={{ position: "relative" }}>
        <BodyPartList data={equipmentExercises} />
      </Stack>
    </Box>
  );
};

SimilarExercises.propTypes = {
  targetMuscleExercises: PropTypes.array.isRequired,
  equipmentExercises: PropTypes.array.isRequired,
};

export default SimilarExercises;
