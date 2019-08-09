import React from 'react'
import NotificationWrapper from './NotificationWrapper'
import NotificationHeader from './NotificationHeader'
import NotificationBody from './NotificationBody'
import NotificationActions from './NotificationActions'

export default function AndroidNotification() {
  return (
      <NotificationWrapper>
          <NotificationHeader />
          <NotificationBody />
          <NotificationActions>
            
          </NotificationActions>
      </NotificationWrapper>
  )
}