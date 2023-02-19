import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  footerContainer: {
    backgroundColor: "#333",
  },
  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
  footerBox: {
    margin: "auto",
    padding: "1rem",
  },
  logo: {
    width: "50%",
    margin: "auto",
    border: "3px solid white",
    borderRadius: "1rem",
  },
  footerText: {
    color: "white",
    fontSize: "1.35rem",
  },
});
