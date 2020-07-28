import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	landing: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		height: "100vh",
		backgroundColor: "#000",
		background: `url(https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_960_720.jpg) no-repeat center center fixed`,
		backgroundSize: "cover",
		webkitBackgroundSize: "cover",
		mozBackgroundSize: "cover",
		oBackgroundSize: "cover",
	},
	marquee: {
		display: "flex",
		flexDirection: "column",
		alignSelf: "center",
		width: "15vw",
		color: "white",
		justifyContent: "center",
		alignItems: "center",
	},
	name: {
		display: "flex",
		fontFamily: "Rock Salt",
		justifyContent: "center",
	},
	purpose: {
		display: "flex",
		fontFamily: "Permanent Marker",
		justifyContent: "center",
	},
	button: {
		display: "flex",
		width: "200px",
		marginBottom: "1rem",
		color: "white",
		borderColor: "white",
		textDecoration: "none",
		fontSize: "1.25rem",
	},
});

export default function Landing() {
	const classes = useStyles();
	return (
		<div className={classes.landing}>
			<div className={classes.marquee}>
				<h1 className={classes.name}>SolutuS LLC</h1>
				<h4 className={classes.purpose}>Mobile and Web Development</h4>
				<Link exact to="/Main" style={{ textDecoration: "none" }}>
					<Button className={classes.button} variant="outlined">
						Enter Site
					</Button>
				</Link>
			</div>
		</div>
	);
}
