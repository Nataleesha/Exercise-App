import { useState, useEffect } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import PropTypes from "prop-types";

import BodyPartList from "../../components/BodyPartList/BodyPartList";
import { fetchData } from "../../utils/fetchData";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyPartsList = async () => {
      const bodyPartListData = await fetchData("/exercises/bodyPartList");

      setBodyParts(["all", ...bodyPartListData]);
    };
    fetchBodyPartsList();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData("/exercises");

      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack justifyContent="center" alignItems="center" mt="25px" p="20px">
      <Typography
        fontWeight="700"
        mb="50px"
        textAlign="center"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
      >
        Awesome Exercises You <br /> Should Try
      </Typography>
      <Box position="relative" mb="70px">
        <TextField
          height="70px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", md: "550px", sm: "300px" },
            borderRadius: "40px",
            backgroundColor: "#ffffff",
          }}
        ></TextField>
        <Button
          href="#exercises"
          className="search-btn"
          sx={{
            bgcolor: "#D13F5C",
            color: "#fff",
            textTransform: "none",
            width: { lg: "200px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "55px",
            position: "absolute",
            right: "0",
            // action: "#exercises",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          minHeight: "300px",
          width: "100%",
          p: "20px",
        }}
      >
        <BodyPartList
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

SearchExercises.propTypes = {
  setExercises: PropTypes.func.isRequired,
  bodyPart: PropTypes.string.isRequired,
  setBodyPart: PropTypes.func.isRequired,
};

export default SearchExercises;
