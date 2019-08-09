import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Chevron from '@material-ui/icons/KeyboardArrowDown'

const useStyles = makeStyles(theme => ({
  root: {
      display: 'flex',
      alignItems: 'center',
      padding: '.8rem 0.8rem .4rem 0.8rem'
  },
  icon: {
      '& svg': {
          fontSize: '1.2rem'
      }
  },
  name: {
    color: 'black',
    margin: '0 0.3rem'
  },
  dot: {
    margin: '0 0.2rem',
    color: '#7e7e7e'
  },
  date: {
    margin: '0 0.2rem',
    color: '#7e7e7e'   
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
    const accent = props.accent
    return (
        <div className={classes.root}>
            <div className={classes.icon} style={{color: accent}}>
                {icon}
            </div>
            <Typography className={classes.name} style={{color: accent}} variant="caption">{name}</Typography>
            <span className={classes.dot}> •</span>
            <Typography className={classes.date} variant="caption">{date}</Typography>
            <Chevron className={classes.chevron} />
        </div>
    )
}