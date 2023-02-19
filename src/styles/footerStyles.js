import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  footerContainer: {
    paddingTop: "3rem",
    paddingBottom: "3rem",
    backgroundColor: "#333",
  },
  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
  footerBox: {
    margin: "auto",
  },
  footerText: {
    color: "white",
    fontSize: "1.35rem",
  },
});
