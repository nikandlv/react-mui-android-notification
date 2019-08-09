import React from 'react'
import NotificationWrapper from './NotificationWrapper'
import NotificationHeader from './NotificationHeader'
import NotificationBody from './NotificationBody'
import NotificationActions from './NotificationActions'
import Whatshot from '@material-ui/icons/Whatshot'
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        textAlign: 'unset',
        flexDirection: 'column',
        alignItems: 'unset'
    },
  }));

export default function AndroidNotification(props) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const defaultProps = {
    name: 'Android Notification',
    icon: <Whatshot />,
    date: 'Nov 6',
    accent: 'rgb(63, 81, 181)',
    title: 'Awesome Notification',
    body: 'this is an awesome notification !',
  }

  function toggleExpandMode() {
    if(typeof props.children === 'undefined') {
      return
    }
    setExpanded(!expanded)
  }
  console.log(props.children)
  return (
    <NotificationWrapper className={classes.root}>
        <ButtonBase className={classes.root} onClick={toggleExpandMode}>
            <NotificationHeader expanded={expanded} {...defaultProps} {...props}/>
            <NotificationBody {...defaultProps} {...props}/>
        </ButtonBase>
        <NotificationActions expanded={expanded} {...defaultProps} {...props}>
            {props.children}
        </NotificationActions>
    </NotificationWrapper>
  )
}