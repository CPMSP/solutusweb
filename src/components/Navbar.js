import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "../styles/navbarStyles";
import TemporaryDrawer from "../components/Drawer";

export default function Navbar() {
	const classes = useStyles();

	return (
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
	);
}
