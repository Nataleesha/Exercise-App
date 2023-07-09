import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchData } from "../../../utils/fetchData";

import Detail from "../../Detail/Detail";
import ExerciseVideos from "../../ExerciseVideos/ExerciseVideos";
import SimilarExercises from "../../SimilarExercises/SimilarExercises";

const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailsData = await fetchData(`exercises/exercise/${id}`);
      setExerciseDetails(exerciseDetailsData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetails={exerciseDetails} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetails;
