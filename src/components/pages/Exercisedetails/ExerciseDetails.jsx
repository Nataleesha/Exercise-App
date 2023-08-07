import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchData } from "../../../utils/fetchData";
import { fetchVideos } from "../../../utils/fetchVideos";

import Detail from "../../Detail/Detail";
import ExerciseVideos from "../../ExerciseVideos/ExerciseVideos";
import SimilarExercises from "../../SimilarExercises/SimilarExercises";

const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailsData = await fetchData(`exercises/exercise/${id}`);
      setExerciseDetails(exerciseDetailsData);

      const exerciseVideosData = await fetchVideos(
        `/search?query=${exerciseDetailsData.name}`
      );
      setExerciseVideos(exerciseVideosData.contents);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetails={exerciseDetails} />
      {!exerciseVideos.length || !exerciseDetails.name ? null : (
        <ExerciseVideos
          exerciseVideos={exerciseVideos}
          name={exerciseDetails.name}
        />
      )}
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetails;
