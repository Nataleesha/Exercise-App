import { Box, Typography, Button } from "@mui/material";

import HeroBannerImage from "../../assets/images/hero.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#D13F5C" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        mb="30px"
        mt="30px"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb="20px">
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: "#D13F5C",
          marginTop: "20px",
          padding: "10px 20px",
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight="600"
        fontSize="200px"
        color="#D13F5C"
        mt="60px"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
