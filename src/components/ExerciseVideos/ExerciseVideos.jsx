import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Stack
      sx={{
        marginTop: { lg: "100px", xs: "20px" },
      }}
    >
      <Typography variant="h4" mb="50px">
        Watch{" "}
        <span style={{ color: "#D13E5C", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          justifyContent: "space-between",
          marginBottom: "60px",
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item) => (
          <a
            key={item.video.videoId}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              className="video-image"
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.video.title}
              </Typography>
              <Typography variant="subtitle1">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Stack>
  );
};

ExerciseVideos.propTypes = {
  exerciseVideos: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default ExerciseVideos;
