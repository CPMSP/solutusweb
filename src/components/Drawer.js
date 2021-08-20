import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {
	Drawer,
	Button,
	ListItem,
	List,
	ListItemText
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	list: {
		width: 'auto',
		height: '100%',
		color: 'white',
		backgroundColor: 'black'
	},
	listItem: {
		color: 'inherit',
		textDecoration: 'none',
		width: '100%',
		padding: '1rem',
		'&:hover': {
			background: 'grey',
			color: 'white',
			borderRadius: '1.25rem'
		}
	},
	fullList: {
		width: 'auto'
	}
});

export default function TemporaryDrawer() {
	const classes = useStyles();
	const [
		state,
		setState
	] = useState({
		left: false
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{[
					'Main',
					'Projects',
					'About',
					'Contact'
				].map((text) => (
					<ListItem>
						<Link
							className={classes.listItem}
							to={text}
							button
							key={text}
						>
							<ListItemText primary={text} />
						</Link>
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div>
			{[
				'left'
			].map((anchor) => (
				<React.Fragment key={anchor}>
					<Button
						color="inherit"
						onClick={toggleDrawer(anchor, true)}
					>
						<MenuIcon />
					</Button>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}
