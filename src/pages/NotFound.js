import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { useStyles } from "../styles/pageStyles";

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
				<Box mt={2}>
					<Typography className={classes.footer}>Solutus LLC</Typography>
				</Box>
			</Container>
		</div>
	);
}
