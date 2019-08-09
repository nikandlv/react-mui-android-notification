import React from 'react'
import { Paper } from '@material-ui/core';
export default function NotificationWrapper(props) {
    return (
        <Paper {...props}>
            {props.children}
        </Paper>
    )
}