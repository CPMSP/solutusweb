import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
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
	},
	heroText: {
		fontFamily: "Rock Salt",
		color: "white",
		fontSize: "5rem",
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
