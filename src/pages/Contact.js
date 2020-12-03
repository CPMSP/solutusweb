import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import Navbar from '../components/Navbar';
import { useStyles } from '../styles/pageStyles';

export default function Contact() {
	const classes = useStyles();
	document.title = 'Contact Solutus';
	return (
		<div className={classes.root}>
			<Navbar />
			<Container className={classes.container}>
				<Box className={classes.boxes}>
					<Typography className={classes.header}>
						Solutus LLC
					</Typography>
					<Typography className={classes.addressLabels}>
						PO Box 518
					</Typography>
					<Typography className={classes.addressLabels}>
						Mound, MN 55364{' '}
					</Typography>
					<hr />
					<Typography className={classes.addressLabels}>
						<a
							href="mailto:solutusmsp@gmail.com"
							target="_top"
							className={classes.contactPoints}
						>
							(@) solutusmsp@gmail.com
						</a>
					</Typography>
					<Typography className={classes.addressLabels}>
						<a
							href="tel:612-251-6895"
							className={classes.contactPoints}
						>
							(T) 612-251-6895
						</a>
					</Typography>
				</Box>
				<Box mt={2}>
					<Typography className={classes.footer}>
						Solutus LLC
					</Typography>
				</Box>
			</Container>
		</div>
	);
}
