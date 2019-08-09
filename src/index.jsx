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
        textAlign: 'unset',
        flexDirection: 'column',
        alignItems: 'unset',

        "&.pie": {
          borderRadius: '1rem'
        },
    },
  }));

export default function AndroidNotification(props) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const variant = props.variant || 'pie'
  const defaultProps = {
    name: 'Android Notification',
    icon: <Whatshot />,
    date: 'Nov 6',
    accent: 'rgb(63, 81, 181)',
    title: 'Awesome Notification',
    body: 'this is an awesome notification !',
    rounded: false,
    variant: 'oreo'
  }

  function toggleExpandMode() {
    if(typeof props.children === 'undefined') {
      return
    }
    setExpanded(!expanded)
  }
  return (
    <NotificationWrapper {...defaultProps} {...props}>
        <ButtonBase className={`${classes.root} ${variant}`} onClick={toggleExpandMode}>
            <NotificationHeader expanded={expanded} {...defaultProps} {...props}/>
            <NotificationBody {...defaultProps} {...props}/>
        </ButtonBase>
        <NotificationActions expanded={expanded} {...defaultProps} {...props}>
            {props.children}
        </NotificationActions>
    </NotificationWrapper>
  )
}