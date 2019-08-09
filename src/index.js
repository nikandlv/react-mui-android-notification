import React from 'react'
import NotificationWrapper from './NotificationWrapper'
import NotificationHeader from './NotificationHeader'
import NotificationBody from './NotificationBody'
import NotificationActions from './NotificationActions'

export default function AndroidNotification(props) {
  return (
      <NotificationWrapper {...props}>
          <NotificationHeader {...props}/>
          <NotificationBody {...props}/>
          <NotificationActions {...props}>
            
          </NotificationActions>
      </NotificationWrapper>
  )
}