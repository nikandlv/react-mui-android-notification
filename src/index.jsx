import React from 'react'
import NotificationWrapper from './NotificationWrapper'
import NotificationHeader from './NotificationHeader'
import NotificationBody from './NotificationBody'
import NotificationActions from './NotificationActions'
import Whatshot from '@material-ui/icons/Whatshot'
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        textAlign: 'unset'
    },
  }));

export default function AndroidNotification(props) {
  const classes = useStyles()
  const defaultProps = {
    name: 'Android Notification',
    icon: <Whatshot />,
    date: 'Nov 6',
    accent: 'rgb(63, 81, 181)',
    title: 'Awesome Notification',
    body: 'this is an awesome notification !'
  }
  return (
      <ButtonBase className={classes.root}>
        <NotificationWrapper className={classes.root}>
            <NotificationHeader {...defaultProps} {...props}/>
            <NotificationBody {...defaultProps} {...props}/>
          <NotificationActions {...defaultProps} {...props}>
          </NotificationActions>
        </NotificationWrapper>
      </ButtonBase>
  )
}