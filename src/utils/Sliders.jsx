import React, { useRef, useEffect } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

import { Box } from "@mui/system";

const Sliders = ({ children, options }) => {
  const flickityRef = useRef(null);

  useEffect(() => {
    flickityRef.current = new Flickity(".slider", options);
    return () => {
      flickityRef.current.destroy();
    };
  }, [options]);

  return (
    <Box className="slider" style={{height:'70vh'}}>
      {React.Children.map(children, (child) => {
        return <Box className="slide" style={{paddingBottom: '1rem', paddingTop: '0.5rem'}}>{child}</Box>;
      })}
    </Box>
  );
};

export default Sliders;
