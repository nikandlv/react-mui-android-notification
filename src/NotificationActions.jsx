import React from 'react'
import { Collapse, Button } from '@material-ui/core';

export default function NotificationActions(props) {
    const expanded = props.expanded
    return (
        <Collapse in={expanded}>
            {props.children}
        </Collapse>
    )
}