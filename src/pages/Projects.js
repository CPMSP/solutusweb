import React from "react";
import { Container, Box, Typography, Button } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { useStyles } from "../styles/pageStyles";
import reactcolors from "../public/reactcolors.png";
import gdt from "../public/gdt.png";
import barefaced from "../public/barefaced.png";

export default function Projects() {
  const classes = useStyles();
  document.title = "Projects";

  return (
    <div className={classes.root}>
      <Navbar />
      <Container className={classes.container}>
        <Box className={classes.boxes}>
          <Typography className={classes.header}>
            <span className={classes.hypetag}>Projects</span>
          </Typography>
        </Box>
        <Box className={classes.boxes}>
          <Typography className={classes.projectDescriptions}>
            Quantum Martial Arts is a client whose website I built on WordPress,
            and deployed via Lightsail on AWS. Designed with extensibility in
            mind and a desire to ensure that multiple dojangs (gyms) are given
            the information they need for ongoing training as well as
            informational purposes. We will likely keep developing new uses for
            this site over time.
            <Typography className={classes.projectDescriptions}>
              Just as I encourage all my friends and family to do, please
              explore what Grand Master Fred Baker's Quantum Martial Arts has to
              offer. I highly recommend his classes and hope to continue to work
              in the program as well as on this project for a long while.
            </Typography>
            <Button className={classes.projectButtons}>
              <a
                className={classes.projectLinks}
                href="https://quantummartialarts.net/"
              >
                <img
                  className={classes.projectImage}
                  src={reactcolors}
                  alt="quantum martial arts"
                />
              </a>
            </Button>
          </Typography>
        </Box>
        <Box className={classes.boxes}>
          <Typography className={classes.projectDescriptions}>
            An ongoing partner from mid 2021 has been Grey Duct Technologies.{" "}
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://stargazerllc.com"
            >
              As a contractor with a company called Stargazer LLC
            </a>{" "}
            I helped to build this site in Gatsby / React JS, with social
            plugins, a contact form, custom theming, newsletter support, and so
            much more. I am now the ongoing maintainer when GDT needs updates or
            changes - most recently a tracking pixel for marketing campaigns.
            Thank you to Jason and his team for their support!
            <Typography className={classes.projectDescriptions}>
              Please feel free to click on the box below to learn more about a
              fantastic partner at Grey Duct Technologies, and see their site.
              If you need Duct Cleaning in the MSP area, look no further!
            </Typography>
            <Button className={classes.projectButtons}>
              <a
                className={classes.projectLinks}
                href="https://www.grayducttechnologies.com/"
              >
                <img
                  className={classes.projectImage}
                  src={gdt}
                  alt="grey duct technologies"
                />
              </a>
            </Button>
          </Typography>
        </Box>
        <Box className={classes.boxes}>
          <Typography className={classes.projectDescriptions}>
            Barefaced Esthetic Studio is an ongoing customer that originally
            built their site themselves in Weebly and asked for some guidance in
            theming and routing. I was able to help in assuring that there
            weren't dead links and that their catalog was shoppable for
            customers. I also helped in ensuring that shipping and taxation
            rates were accurate, inventory threshold levels were adequate,
            Square booking tie-ins were functional, and more. I am grateful to
            Andi and her crew for the partnership!
            <Typography className={classes.projectDescriptions}>
              Click on the picture to see the site and book a superior
              Esthetician's appointment with Barefaced Esthetic Studio in Golden
              Valley! You won't find better.
            </Typography>
            <Button className={classes.projectButtons}>
              <a
                className={classes.projectLinks}
                href="https://www.barefacedesthetic.com/"
              >
                <img
                  className={classes.projectImage}
                  src={barefaced}
                  alt="barefaced esthetic studio"
                />
              </a>
            </Button>
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography>Solutus LLC</Typography>
        </Box>
      </Container>
    </div>
  );
}
