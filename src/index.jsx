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
  const variant = props.variant || 'oreo'
  const defaultProps = {
    name: 'Android Notification',
    icon: <Whatshot />,
    date: 'Nov 6',
    accent: 'rgb(63, 81, 181)',
    title: 'Awesome Notification',
    body: 'this is an awesome notification !',
    rounded: false,
    variant: 'oreo',
    expandable: true,
    onClick: (expanded,setExpandMode) => {
      setExpandMode(!expanded)
    }
  }
  const config = { ...defaultProps, ...props }

  function setExpandMode(expand) {
    if(typeof props.children === 'undefined') {
      return
    }
    setExpanded(!expand)
  }
  
  function handleOnClick() {
    config.onClick(expanded,setExpandMode)
  }


  return (
    <NotificationWrapper {...config} >
        <ButtonBase className={`${classes.root} ${variant}`} onClick={handleOnClick}>
            <NotificationHeader expanded={expanded} {...config} />
            <NotificationBody {...config} />
        </ButtonBase>
        {config.expandable
          ? (
            <NotificationActions expanded={expanded} {...config} >
                {props.children}
            </NotificationActions>
          )
          : null
        }
        
    </NotificationWrapper>
  )
}