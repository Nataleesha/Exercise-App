import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        width="300px"
        height="300px"
      />
      <Stack direction="row" marginTop="15px" marginBottom="15px">
        <Button
          sx={{
            mr: "20px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "15px",
            borderRadius: "20px",
            textTransform: "capitalize",
            ":hover": { backgroundColor: "#fb9393" },
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            ":hover": { backgroundColor: "#f8be42" },
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        color="#1a212f"
        textAlign="left"
        fontWeight="bold"
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
