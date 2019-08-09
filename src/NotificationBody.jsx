import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0rem 0.8rem .8rem 0.8rem'
    },
    title: {
        fontSize: '.8rem'
    },
    body: {
        fontSize: '.8rem',
        marginTop: '0.2rem'
    }
  }));
export default function NotificationBody(props) {
    const title = props.title
    const body = props.body
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant="body1">{title}</Typography>
            <Typography className={classes.body} variant="caption">{body}</Typography>
        </div>
    )
}