import { useContext } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import BodyPart from "../BodyPart/BodyPart";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

import leftArrowIcon from "../../assets/images/arrow-left.png";
import rightArrowIcon from "../../assets/images/arrow-right.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={leftArrowIcon} alt="arrow-left" width="50px" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={rightArrowIcon} alt="arrow-right" width="50px" />
    </Typography>
  );
};

const BodyPartList = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          paddingTop="25px"
          paddingBottom="25px"
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 30px"
          sx={{ ":first-child": { marginLeft: 0 } }}
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

BodyPartList.propTypes = {
  data: PropTypes.array.isRequired,
  bodyPart: PropTypes.string,
  setBodyPart: PropTypes.func,
  isBodyParts: PropTypes.bool,
};

export default BodyPartList;
