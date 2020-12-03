import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	mainRoot: {
		backgroundColor: '#e9ebee'
	},
	root: {
		backgroundColor: '#e9ebee',
		minHeight: '100vh'
	},
	hero: {
		width: '100%',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		alignText: 'center',
		backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(
			'https://cdn.pixabay.com/photo/2018/07/14/11/33/network-3537401_960_720.jpg'
		)`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',
		animation: `$fadeIn 3000ms ${theme.transitions.easing.easeInOut}`
	},
	'@keyframes fadeIn': {
		'0%': {
			opacity: 0
		},
		'100%': {
			opacity: 1
		}
	},
	heroText: {
		fontFamily: 'Rock Salt',
		color: 'white',
		fontSize: '4rem'
	},
	container: {
		backgroundColor: '#e9ebee',
		maxWidth: '1000px'
	},
	boxes: {
		backgroundColor: '#f5f5f5',
		borderWidth: '10px',
		borderStyle: 'outset',
		marginBottom: '2rem',
		padding: '2rem'
	},
	header: {
		fontFamily: 'Permanent Marker',
		fontSize: '2rem',
		fontWeight: 'bold',
		display: 'inline-block',
		width: '100%'
	},
	mainImage: {
		marginTop: '2rem'
	},
	hypetag: {
		fontFamily: 'Rock Salt'
	},
	caption: {
		marginTop: '2rem',
		fontWeight: 'bold'
	},
	addressLabels: {
		fontWeight: 'bold'
	},
	contactPoints: {
		color: 'black',
		textDecoration: 'none'
	},
	contactButton: {
		marginTop: '2rem'
	},
	contactLink: {
		textDecoration: 'none',
		color: 'black',
		paddingTop: '3px'
	},
	projectDescriptions: {
		marginTop: '2rem'
	},
	projectImage: {
		width: '80%'
	},
	projectButtons: {
		marginTop: '2rem'
	},
	projectLinks: {
		textDecoration: 'none',
		color: 'black'
	},
	speakerLink: {
		color: 'black'
	},
	footer: {
		position: 'absolute',
		width: '100%',
		right: 0,
		bottom: 0,
		left: 0,
		textAlign: 'center'
	}
}));
