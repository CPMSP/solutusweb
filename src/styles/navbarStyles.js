import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
	nav: {
		marginBottom: "2rem",
		color: "primary",
		position: "sticky",
	},
	menuButton: {
		marginRight: "1rem",
		color: "inherit",
	},
	title: {
		flexGrow: 1,
		display: "flex",
		justifyContent: "flex-start",
	},
});
