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
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailsData = await fetchData(`exercises/exercise/${id}`);
      setExerciseDetails(exerciseDetailsData);

      const exerciseVideosData = await fetchVideos(
        `/search?query=${exerciseDetailsData.name}`
      );
      setExerciseVideos(exerciseVideosData.contents);

      const exerciseVideoData = await fetchData(
        `exercises/target/${exerciseDetailsData.target}`
      );
      setTargetMuscleExercises(exerciseVideoData);

      const exerciseEquipmentData = await fetchData(
        `exercises/equipment/${exerciseDetailsData.equipment}`
      );
      setEquipmentExercises(exerciseEquipmentData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box
      textAlign="center"
      padding="0 30px"
      margin="0 auto"
      sx={{ width: { sm: "500px", md: "830px", lg: "1200px" } }}
    >
      <Detail exerciseDetails={exerciseDetails} />
      {!exerciseVideos.length || !exerciseDetails.name ? null : (
        <ExerciseVideos
          exerciseVideos={exerciseVideos}
          name={exerciseDetails.name}
        />
      )}
      {!targetMuscleExercises.length || !equipmentExercises.length ? null : (
        <SimilarExercises
          targetMuscleExercises={targetMuscleExercises}
          equipmentExercises={equipmentExercises}
        />
      )}
    </Box>
  );
};

export default ExerciseDetails;
