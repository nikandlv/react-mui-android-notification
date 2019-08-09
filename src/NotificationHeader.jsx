import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Chevron from '@material-ui/icons/KeyboardArrowDown'

const useStyles = makeStyles(theme => ({
  root: {
      display: 'flex',
      alignItems: 'center'
  },
  icon: {
    
  },
  name: {
    color: 'black',
    margin: '0 0.3rem'
  },
  dot: {
    margin: '0 0.2rem',
    color: '#c5c5c5'
  },
  date: {
    margin: '0 0.2rem',
    color: '#c5c5c5'   
  },
  chevron: {
      fontSize: '1.1rem'
  }
}));
export default function NotificationHeader(props) {
    const classes = useStyles();
    const name = props.name
    const icon = props.icon
    const date = props.date
    return (
        <div className={classes.root}>
            <div className={classes.icon}>
                {icon}
            </div>
            <Typography className={classes.name} variant="caption">{name}</Typography>
            <span className={classes.dot}> •</span>
            <Typography className={classes.date} variant="caption">{date}</Typography>
            <Chevron className={classes.chevron} />
        </div>
    )
}