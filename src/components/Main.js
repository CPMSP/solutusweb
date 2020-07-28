import React from "react";
import {
	createMuiTheme,
	ThemeProvider,
	makeStyles,
} from "@material-ui/core/styles";
import {
	Container,
	Box,
	Typography,
	AppBar,
	Toolbar,
	IconButton,
} from "@material-ui/core";
import TemporaryDrawer from "../components/Drawer";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: grey[900],
		},
		secondary: {
			main: red[800],
		},
	},
});

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: "#e9ebee",
	},
	hero: {
		width: "100%",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		alignText: "center",
		backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(
			'https://cdn.pixabay.com/photo/2018/07/14/11/33/network-3537401_960_720.jpg'
		)`,
		backgroundSize: "cover",
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundAttachment: "fixed",
		// marginBottom: "2rem",
	},
	heroText: {
		fontFamily: "Rock Salt",
		color: "white",
		fontSize: "5rem",
	},
	nav: {
		marginBottom: "2rem",
		color: "primary",
		position: "sticky",
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: "inherit",
	},
	title: {
		flexGrow: 1,
		display: "flex",
		justifyContent: "flex-start",
	},
	container: {
		backgroundColor: "#e9ebee",
	},
	boxes: {
		backgroundColor: "#f5f5f5",
		borderWidth: "10px",
		borderStyle: "outset",
		marginBottom: "2rem",
		paddingBottom: "2rem",
	},
	header: {
		fontFamily: "Permanent Marker",
		fontSize: "2rem",
		fontWeight: "bold",
		marginTop: "2rem",
		marginBottom: "2rem",
		display: "inline-block",
		width: "100%",
	},
	hypetag: {
		fontFamily: "Rock Salt",
	},
	caption: {
		marginTop: "2rem",
		fontWeight: "bold",
	},
}));

export default function Main() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<Box className={classes.hero} alt="Connected World">
					<Typography className={classes.heroText}>
						The Future Is Now
					</Typography>
				</Box>
				<AppBar className={classes.nav}>
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							aria-label="menu">
							<TemporaryDrawer />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							Mobile and Web Solutions
						</Typography>
					</Toolbar>
				</AppBar>
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
							With a custom Native Android or iOS application
							designed specifically for your needs, we can take
							your vision to the next level
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
							Progressive Web Apps (PWAs) enhance your app
							usability to PC as well as mobile usage
						</Typography>
						<Typography className={classes.caption}>
							We do that
						</Typography>
					</Box>
					<Box className={classes.boxes}>
						<Typography className={classes.caption}>
							Bring an idea to the table and we can walk through
							the layout and design options to deliver on your
							request
						</Typography>
					</Box>
					<Box mt={2}>
						<Typography>Solutus LLC</Typography>
					</Box>
				</Container>
			</div>
		</ThemeProvider>
	);
}
