import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "../styles/footerStyles";
import logo from "../public/logocropped.png";

export default function Footer({ style }) {
  const classes = useStyles();

  return (
    <Box className={classes.footerContainer} style={style}>
      <Box className={classes.footerGrid}>
        <Box className={classes.footerBox}></Box>
        <Box className={classes.footerBox}>
          <img className={classes.logo} src={logo} alt="business logo" />
        </Box>
        <Box className={classes.footerBox}></Box>
      </Box>
    </Box>
  );
}
