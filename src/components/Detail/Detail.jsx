import { Typography, Stack, Button } from "@mui/material";
import PropTypes from "prop-types";

import icon from "../../assets/images/logo.png";

const Detail = ({ exerciseDetails }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails;

  const extraDetails = [
    {
      icon: icon,
      name: bodyPart,
    },
    {
      icon: icon,
      name: target,
    },
    {
      icon: icon,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} {"  "}
          is one of the best exercises to target your {target}. It will help you
          to improve your mood and gain energy.
        </Typography>
        {extraDetails.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
              }}
            >
              <img src={item.icon} alt={bodyPart} width="50px" height="50px" />
            </Button>
            <Typography variant="h6" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

Detail.propTypes = {
  exerciseDetails: PropTypes.object.isRequired,
};

export default Detail;
