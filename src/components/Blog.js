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
import TemporaryDrawer from "./Drawer";
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
}));

export default function Blog() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
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
							This is the blog page
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
