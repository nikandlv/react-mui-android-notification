import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
      display: 'flex'
  }
}));
export default function NotificationActions() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
        </div>
    )
}