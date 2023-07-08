import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row" marginTop="15px">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "15px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        color="#000"
        fontWeight="bold"
        mt="11px"
        ml="21px"
        pb="10px"
        textTransform="capitalize"
        fontSize="20px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

ExerciseCard.propTypes = {
  exercise: PropTypes.object.isRequired,
};

export default ExerciseCard;
