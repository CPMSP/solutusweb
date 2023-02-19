import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainRoot: {
    backgroundColor: "#e9ebee",
  },
  root: {
    backgroundColor: "#e9ebee",
    minHeight: "100vh",
  },
  hero: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignText: "center",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(
			'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80'
		)`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    animation: `$fadeIn 3000ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  heroText: {
    fontFamily: "Rock Salt",
    color: "white",
    fontSize: "4rem",
  },
  container: {
    backgroundColor: "#e9ebee",
    maxWidth: "1000px",
  },
  boxes: {
    backgroundColor: "#f5f5f5",
    border: "3px solid #a7a2a9",
    borderRadius: "1rem",
    marginBottom: "2rem",
    padding: "2rem",
  },
  header: {
    fontFamily: "Permanent Marker",
    fontSize: "2rem",
    fontWeight: "bold",
    display: "inline-block",
    width: "100%",
  },
  mainImage: {
    marginTop: "2rem",
  },
  hypetag: {
    fontFamily: "Rock Salt",
  },
  caption: {
    marginTop: "2rem",
    fontWeight: "bold",
  },
  addressLabels: {
    fontWeight: "bold",
  },
  contactPoints: {
    color: "black",
    textDecoration: "none",
  },
  contactButton: {
    marginTop: "2rem",
    border: "2px solid",
    borderRadius: ".5rem",
  },
  contactLink: {
    textDecoration: "none",
    color: "black",
    paddingTop: "3px",
  },
  projectDescriptions: {
    marginTop: "2rem",
  },
  projectImage: {
    width: "80%",
  },
  projectButtons: {
    marginTop: "2rem",
  },
  projectLinks: {
    color: "black",
  },
  sgUL: {
    listStyle: "none inside none",
    border: "5px inset",
    borderRadius: "1rem",
    width: "40%",
    margin: "2rem auto",
    padding: 0,
  },
  stargazerLI: {
    padding: 5,
    alignItems: "start",
  },
  speakerLink: {
    color: "black",
  },
}));
