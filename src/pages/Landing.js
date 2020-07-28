import React from "react";
import { useStyles } from "../styles/landingStyles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Landing() {
	const classes = useStyles();
	return (
		<div className={classes.landing}>
			<div className={classes.marquee}>
				<h1 className={classes.name}>SolutuS LLC</h1>
				<h4 className={classes.purpose}>Mobile and Web Development</h4>
				<Link exact to="/Main" style={{ textDecoration: "none" }}>
					<Button
						className={classes.button}
						variant="outlined"
						color="secondary">
						Enter Site
					</Button>
				</Link>
			</div>
		</div>
	);
}
