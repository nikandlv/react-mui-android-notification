import React from 'react'
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
      display: 'flex',
      alignItems: 'center',
      padding: '.4rem .6rem .4rem .6rem',
      background: '#eeeeee',
      maxHeight: 36
  },
}));
//#eeeeee
export default function NotificationActions(props) {
    const classes = useStyles();
    const expanded = props.expanded
    return (
        <Collapse in={expanded}>
            <div className={classes.root}>
                {props.children}
            </div>
        </Collapse>
    )
}