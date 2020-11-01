import React from "react";
import { createStyles, CssBaseline, Theme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { SideBar } from "./components/sidebar/Sidebar";
import theme from "./theme/theme";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background: "primary",
      color: theme.palette.common.white,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const App = (): JSX.Element => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h5">Hill Baggers</Typography>
          </Toolbar>
          <SideBar width={drawerWidth} />
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default App;
