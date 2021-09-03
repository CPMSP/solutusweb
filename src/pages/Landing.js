import React from 'react';
import { useStyles } from '../styles/landingStyles';

export default function Landing() {
	setTimeout(() => {
		window.location.replace('/Main');
	}, 2000);
	const classes = useStyles();
	return (
		<div className={classes.landing}>
			<div className={classes.marquee}>
				<h1 className={classes.name}>SolutuS LLC</h1>
				<h4 className={classes.purpose}>Mobile and Web Development</h4>
			</div>
		</div>
	);
}
