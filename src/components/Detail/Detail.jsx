import { Typography, Stack, Button } from "@mui/material";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import icon from "../../assets/images/logo.png";

const Detail = ({ exerciseDetails }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails;

  const extraDetails = [
    {
      icon: icon,
      name: bodyPart,
      id: nanoid(),
    },
    {
      icon: icon,
      name: target,
      id: nanoid(),
    },
    {
      icon: icon,
      name: equipment,
      id: nanoid(),
    },
  ];

  return (
    <>
      <Typography variant="h3" textTransform="capitalize" marginBottom="50px">
        {name}
      </Typography>
      <Stack
        gap="60px"
        sx={{
          flexDirection: { lg: "row" },
          alignItems: "center",
        }}
      >
        <div>
          <img
            src={gifUrl}
            alt={name}
            loading="lazy"
            className="detail-image"
          />
        </div>
        <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
          <Typography variant="h6" textAlign="left">
            Exercises keep you strong.{" "}
            <span style={{ textTransform: "capitalize" }}>{name}</span> {"  "}
            is one of the best exercises to target your{" "}
            <span style={{ textTransform: "capitalize" }}>{target}</span>. It
            will help you to improve your mood and gain energy.
          </Typography>

          {extraDetails.map((item) => (
            <Stack key={item.id} direction="row" gap="24px" alignItems="center">
              <Button
                sx={{
                  background: "#fff2db",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                }}
              >
                <img
                  src={item.icon}
                  alt={bodyPart}
                  width="50px"
                  height="50px"
                />
              </Button>
              <Typography variant="h6" textTransform="capitalize">
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

Detail.propTypes = {
  exerciseDetails: PropTypes.object.isRequired,
};

export default Detail;
