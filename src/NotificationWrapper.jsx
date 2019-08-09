import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
      "&.pie": {
          borderRadius: '1rem'
      }
  },
}));

export default function NotificationWrapper(props) {
    const classes = useStyles()
    return (
        <Paper className={`${classes.root} ${props.variant}`} square={!props.rounded}>
            {props.children}
        </Paper>
    )
}