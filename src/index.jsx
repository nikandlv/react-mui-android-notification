import React from 'react'
import NotificationWrapper from './NotificationWrapper'
import NotificationHeader from './NotificationHeader'
import NotificationBody from './NotificationBody'
import NotificationActions from './NotificationActions'
import Info from '@material-ui/icons/Info'

export default function AndroidNotification(props) {
  const defaultProps = {
    name: 'Android Notification',
    icon: <Info />
  }
  return (
      <NotificationWrapper {...defaultProps} {...props}>
          <NotificationHeader {...defaultProps} {...props}/>
          <NotificationBody {...defaultProps} {...props}/>
          <NotificationActions {...defaultProps} {...props}>
            
          </NotificationActions>
      </NotificationWrapper>
  )
}