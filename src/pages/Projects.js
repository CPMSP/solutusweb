import React from "react";
import { Container, Box, Typography, Button } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { useStyles } from "../styles/pageStyles";
import reactcolors from "../public/reactcolors.png";
import yelpcamp from "../public/yelpcamp.jpg";
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
            An ongoing partner from mid 2021 has been Grey Duct Technologies. I
            was a contractor to help build this site in Gatsby / React JS, with
            social plugins, a contact form, custom theming, newsletter support,
            and so much more. I am now the ongoing maintainer when GDT needs
            updates or changes - most recently a tracking pixel for marketing
            campaigns.
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
            Square booking tie-ins were functional, and more.
            <Typography className={classes.projectDescriptions}>
              Click on the picture to see the site and book an Esthetician's
              appointment with Barefaced Esthetic Studio in Golden Valley!
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
            This is the second capstone I completed in my education, a class
            based React color-picker / custom palette creator. This project
            showed me several new concepts, such as state management and
            lifecycle in a CRA. We employed chroma-js as well as several new
            resources from npm through this course. It utilizes localstorage
            instead of a database, and was deployed via
            create-react-app-buildpack. Hosted on Heroku.
            <Typography className={classes.projectDescriptions}>
              React Colors as learned from Colt Steele's Modern React Bootcamp
              on Udemy. Click the image to see the project. Please note that
              these are free servers, and take a few moments to load.
            </Typography>
            <Button className={classes.projectButtons}>
              <a
                className={classes.projectLinks}
                href="https://reactcolors55401.herokuapp.com/"
              >
                <img
                  className={classes.projectImage}
                  src={reactcolors}
                  alt="react colors project"
                />
              </a>
            </Button>
          </Typography>
        </Box>
        <Box className={classes.boxes}>
          <Typography className={classes.projectDescriptions}>
            Here is the first project I completed on my journey into Web
            Development. It is best described as a "Yelp" clone for campgrounds.
            It gave me a solid foundation of the fundamentals of Full - Stack
            development, with RESTful Routing, ejs templating, Bootstrap,
            authentication with Passport.js, and database integration. Hosted on
            Heroku for your viewing pleasure.
            <Typography className={classes.projectDescriptions}>
              This was my progress through Colt Steele's Web Development
              Bootcamp on Udemy. Click the image to see the project. Again,
              please note that these are free servers, and take a few moments to
              load.
            </Typography>
            <Button className={classes.projectButtons}>
              <a
                className={classes.projectLinks}
                href="https://morning-dusk-93596.herokuapp.com/"
              >
                <img
                  className={classes.projectImage}
                  src={yelpcamp}
                  alt="yelpcamp project"
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
