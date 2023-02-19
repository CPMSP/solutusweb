import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "../styles/footerStyles";

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footerContainer}>
      <Typography className={classes.footerText}>Solutus LLC</Typography>
    </Box>
  );
}
