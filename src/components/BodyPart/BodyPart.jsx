import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

import icon from "../../assets/images/body.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      className="bodyPart-card"
      alignItems="center"
      justifyContent="center"
      sx={{
        borderTop: bodyPart === item ? "4px solid #d13f5c" : "",
        background: "#fff",
        borderRadius: "20px",
        width: "270px",
        height: "270px",
        gap: "20px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={icon} alt="icon" style={{ width: "50px", height: "50px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

BodyPart.propTypes = {
  item: PropTypes.string.isRequired,
  bodyPart: PropTypes.string.isRequired,
  setBodyPart: PropTypes.func.isRequired,
};

export default BodyPart;
