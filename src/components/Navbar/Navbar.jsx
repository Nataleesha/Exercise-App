import { Link, Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import { Suspense } from "react";

import Footer from "../Footer/Footer";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        px="20px"
        sx={{
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          mb: { sm: "32px", xs: "20px" },
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
          <Link to="/" style={{ borderBottom: "2px solid #D13F5C" }}>
            Home
          </Link>
          <a href="#exercises">Exercises</a>
        </Stack>
      </Stack>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Navbar;
