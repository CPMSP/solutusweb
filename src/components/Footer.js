import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "../styles/footerStyles";

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footerContainer}>
      <Box className={classes.footerGrid}>
        <Box className={classes.footerBox}>
          <img src="../public/logocropped.png" alt="business logo" />
        </Box>
        <Box className={classes.footerBox}>
          <Typography className={classes.footerText}>Solutus LLC</Typography>
        </Box>
        <Box className={classes.footerBox}>
          <p>This is also a placeholder</p>
        </Box>
      </Box>
    </Box>
  );
}
