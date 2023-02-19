import React from "react";
import { Container, Box, Typography, Button } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { useStyles } from "../styles/pageStyles";
import qma from "../public/qmahome.png";
import gdt from "../public/gdt.png";
import barefaced from "../public/barefaced.png";
import stargazer from "../public/stargazerllc.png";
import Footer from "../components/Footer";

export default function Clients() {
  const classes = useStyles();
  document.title = "Clients";

  return (
    <div className={classes.root}>
      <Navbar />
      <Container className={classes.container}>
        <Box className={classes.boxes}>
          <Typography className={classes.header}>
            <span className={classes.hypetag}>Clients and Partners</span>
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
                  src={qma}
                  alt="quantum martial arts"
                />
              </a>
            </Button>
          </Typography>
        </Box>
        <Box className={classes.boxes}>
          <Typography className={classes.projectDescriptions}>
            An ongoing client from mid 2021 has been Grey Duct Technologies.{" "}
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
            Barefaced Esthetic Studio is an ongoing client that originally built
            their site themselves in Weebly and asked for some guidance in
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
        <Box className={classes.boxes}>
          <Typography className={classes.projectDescriptions}>
            Stargazer LLC is an ongoing partner with Solutus to source work for
            various clients, one of which is listed above; Gray Duct Tech. We
            also collaborated on other sites, such as:
            <ul className={classes.sgUL}>
              <li className={classes.stargazerLI} key={1}>
                <a
                  className={classes.projectLinks}
                  href="https://minnesnowii.com/"
                >
                  Minnesnowii Shave Ice
                </a>
              </li>
              <li className={classes.stargazerLI} key={2}>
                <a
                  className={classes.projectLinks}
                  href="https://www.pearsontruckinginc.com/"
                >
                  Pearson Trucking
                </a>
              </li>
              <li className={classes.stargazerLI} key={3}>
                <a
                  className={classes.projectLinks}
                  href="https://shakopeecandle.com/"
                >
                  Shakopee Candle Company
                </a>
              </li>
            </ul>
            <Typography className={classes.projectDescriptions}>
              Click to follow to Stargazer's website, or on the links above to
              see work completed.
            </Typography>
            <Button className={classes.projectButtons}>
              <a
                className={classes.projectLinks}
                href="https://stargazerllc.com/"
              >
                <img
                  className={classes.projectImage}
                  src={stargazer}
                  alt="stargazer llc"
                />
              </a>
            </Button>
          </Typography>
        </Box>
        <Footer />
      </Container>
    </div>
  );
}
