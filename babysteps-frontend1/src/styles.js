import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: 3,
    borderRadius: 8,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  cardContent: {
    paddingBottom: theme.spacing(2),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
  dialogContent: {
    paddingBottom: theme.spacing(2),
  },
  inputField: {
    marginBottom: theme.spacing(2),
  },
}));
