import React from "react";
import Drawer from "@material-ui/core/Drawer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const useStyles = (width: number) =>
  makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
      },
      drawer: {
        width: width,
        flexShrink: 0,
      },
      drawerPaper: {
        width: width,
        backgroundColor: theme.palette.primary.main,
        border: "none",
      },
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
    })
  );

export const SideBar = ({ width }: { width: number }): JSX.Element => {
  const classes = useStyles(width)();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Divider />
    </Drawer>
  );
};
