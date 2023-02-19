import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { useStyles } from "../styles/pageStyles";
import Footer from "../components/Footer";

export default function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Container className={classes.container}>
        <Box className={classes.boxes}>
          <Typography className={classes.header}>
            404 - Page Not Found
          </Typography>
        </Box>
        <Footer />
      </Container>
    </div>
  );
}
