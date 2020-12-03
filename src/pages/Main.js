import React from 'react';
import { Container, Box, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useStyles } from '../styles/pageStyles';

export default function Main() {
	const classes = useStyles();

	document.title = 'Solutus LLC';

	return (
		<div className={classes.mainRoot}>
			<Box className={classes.hero} alt="Connected World">
				<Typography className={classes.heroText}>
					The Future Is Now
				</Typography>
			</Box>
			<Navbar />
			<Container className={classes.container}>
				<Box className={classes.boxes}>
					<Typography className={classes.header}>
						Unlock Your{' '}
						<span className={classes.hypetag}>Vision</span>
					</Typography>
					<img
						src="https://images.unsplash.com/photo-1561825618-a26f85c50bf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
						width="50%"
						alt="unlocked"
						className={classes.mainImage}
					/>
					<Typography className={classes.caption}>
						Your vision coupled with our guidance can make
						technology a key factor in your success -- Solutus will
						find a way to put the logic of your business into our
						business logic and forge a unique solution, customized
						for your specific needs.
					</Typography>
				</Box>
				<Box className={classes.boxes}>
					<Typography className={classes.header}>
						Android and iOS Applications
					</Typography>
					<img
						src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
						width="50%"
						alt="mobile application"
						className={classes.mainImage}
					/>
					<Typography className={classes.caption}>
						With a Native Android or iOS application designed with
						your needs at its core, we can help take your vision to
						the next level. Utilizing the native functionality of
						your customer's device can make a powerful impact in
						visibility and usability.
					</Typography>
				</Box>
				<Box className={classes.boxes}>
					<Typography className={classes.header}>
						Static and Dynamic Websites
					</Typography>
					<img
						src="https://cdn.pixabay.com/photo/2017/07/03/15/20/technology-2468063_960_720.png"
						width="50%"
						alt="several devices"
						className={classes.mainImage}
					/>
					<Typography className={classes.caption}>
						Whether you need a non-changing landing page, an
						ecommerce site, or an events driven page with social
						media tie in, we can deliver a solution that will reach
						your audience, no matter what size or shape of device
						they find you on.
					</Typography>
					<Typography className={classes.caption}>
						Need a refresh of your existing site? Let's talk about
						where you would like to take it.
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
						className={classes.mainImage}
					/>
					<Typography className={classes.caption}>
						Progressive Web Apps (PWAs) can enhance an application's
						usability across PC as well as mobile with a smooth,
						fast, and consistent user interface and experience. They
						can also be launched in the wild, without the use of an
						app store.
					</Typography>
				</Box>
				<Box className={classes.boxes}>
					<Typography className={classes.header}>
						Contact Solutus for a Consultation
					</Typography>
					<Button
						variant="outlined"
						className={classes.contactButton}
					>
						<Link to="/contact" className={classes.contactLink}>
							Contact
						</Link>
					</Button>
					<Typography className={classes.caption}>
						Bring an idea to the table and we can walk through the
						layout and design options to deliver on your request.
					</Typography>
				</Box>
				<Box mt={2}>
					<Typography>Solutus LLC</Typography>
				</Box>
			</Container>
		</div>
	);
}
