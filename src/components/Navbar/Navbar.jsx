import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      px="20px"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{ width: "58px", height: "auto", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" alignItems="flex-end">
        <Link to="/" style={{ borderBottom: "2px solid #ff2625" }}>
          Home
        </Link>
        <a href="#exercises">Exercises</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
