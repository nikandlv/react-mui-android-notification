import React from 'react'
import { Paper } from '@material-ui/core';
export function NotificationWrapper(props) {
    return (
        <Paper>
            {props.children}
        </Paper>
    )
}