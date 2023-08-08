import { Oval } from "react-loader-spinner";
import { Stack } from "@mui/material";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Oval color="#d13e5c" />
    </Stack>
  );
};

export default Loader;
