import { Stack, Typography } from "@mui/material";

import body from "../../assets/images/body.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #d13f5c" : "",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        width: "300px",
        height: "300px",
        gap: "40px",
      }}
    >
      <img src={body} alt="icon" style={{ width: "50px", height: "50px" }} />
      {item}
    </Stack>
  );
};

export default BodyPart;
