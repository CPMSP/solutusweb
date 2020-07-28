import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { useStyles } from "../styles/pageStyles";

export default function Main() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Box className={classes.hero} alt="Connected World">
				<Typography className={classes.heroText}>
					The Future Is Now
				</Typography>
			</Box>
			<Navbar />
			<Container className={classes.container}>
				<Box className={classes.boxes}>
					<Typography className={classes.header}>
						Unlock Your{" "}
						<span className={classes.hypetag}>Vision</span>
					</Typography>
					<img
						src="https://images.unsplash.com/photo-1561825618-a26f85c50bf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
						width="50%"
						alt="unlocked"
					/>
					<Typography className={classes.caption}>
						With your vision and our guidance, we can make
						technology a key factor in your success
					</Typography>
				</Box>
				<Box className={classes.boxes}>
					<Typography className={classes.header}>
						Android and iOS Applications
					</Typography>
					<img
						src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
						width="50%"
						alt="Mobile Application"
					/>
					<Typography className={classes.caption}>
						With a custom Native Android or iOS application designed
						specifically for your needs, we can take your vision to
						the next level
					</Typography>
				</Box>
				<Box className={classes.boxes}>
					<Typography className={classes.header}>
						Progressive Web Apps
					</Typography>
					<img
						src="https://images.unsplash.com/photo-1555371363-27a37f8e8c46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
						width="50%"
						alt="web application"
					/>
					<Typography className={classes.caption}>
						Progressive Web Apps (PWAs) enhance your app usability
						to PC as well as mobile usage
					</Typography>
					<Typography className={classes.caption}>
						We do that
					</Typography>
				</Box>
				<Box className={classes.boxes}>
					<Typography className={classes.caption}>
						Bring an idea to the table and we can walk through the
						layout and design options to deliver on your request
					</Typography>
				</Box>
				<Box mt={2}>
					<Typography>Solutus LLC</Typography>
				</Box>
			</Container>
		</div>
	);
}
