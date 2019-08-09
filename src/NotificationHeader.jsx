import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
      display: 'flex'
  },
  icon: {

  },
  name: {

  }
}));
export default function NotificationHeader(props) {
    const classes = useStyles();
    const name = props.name
    const icon = props.icon
    return (
        <div className={classes.root}>
            <div className={classes.icon}>
                {icon}
            </div>
            <Typography className={classes.name} variant="body2">{name}</Typography>
        </div>
    )
}