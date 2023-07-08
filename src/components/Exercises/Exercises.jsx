import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

import { fetchData } from "../../utils/fetchData";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

const Exercises = ({ bodyPart, exercises, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indextOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indextOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData("/exercises/");
      } else {
        exercisesData = await fetchData(`/exercises/bodyPart/${bodyPart}`);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} my="50px" p="20px">
      <Typography variant="h3" mb="45px" textAlign="center">
        Exercises
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "70px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

Exercises.propTypes = {
  bodyPart: PropTypes.string.isRequired,
  exercises: PropTypes.array.isRequired,
  setExercises: PropTypes.func.isRequired,
};

export default Exercises;
