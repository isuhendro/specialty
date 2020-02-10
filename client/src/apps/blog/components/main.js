import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "./card";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card
            image={{
              url:
                "https://t4.ftcdn.net/jpg/02/08/71/09/240_F_208710936_hUahzhJKjGtD6SAbKJspXRabRa5kk6vI.jpg",
              tinyUrl:
                "https://t4.ftcdn.net/jpg/02/08/71/09/240_F_208710936_hUahzhJKjGtD6SAbKJspXRabRa5kk6vI.jpg"
            }}
          />
        </Grid>
        <Grid item xs>
          <Card
            image={{
              url:
                "https://images.pexels.com/photos/59782/pexels-photo-59782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
              tinyUrl:
                "https://images.pexels.com/photos/59782/pexels-photo-59782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
