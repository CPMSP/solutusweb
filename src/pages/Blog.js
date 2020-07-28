import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { useStyles } from "../styles/pageStyles";

export default function Blog() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Navbar />
			<Container className={classes.container}>
				<Box className={classes.boxes}>
					<Typography className={classes.header}>
						This is the
						<span className={classes.hypetag}> Blog</span> Page
					</Typography>
				</Box>
				<Box mt={2}>
					<Typography>Solutus LLC</Typography>
				</Box>
			</Container>
		</div>
	);
}
