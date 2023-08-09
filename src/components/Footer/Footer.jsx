import { Box, Stack, Typography } from "@mui/material";

import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <Box bgcolor="#fff3f4">
      <Stack alignItems="center" p="40px">
        <img src={Logo} alt="logo" width="50px" height="50px" />
        <Typography variant="h5" mt="40px">
          Stay strong
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
