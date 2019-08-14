import React from 'react';
import { render } from 'react-dom';
import 'normalize.css'
import './index.css'
import { Card, CardContent, Typography } from '@material-ui/core';
import AndroidNotification from '../../src';

function App() {
    return (
        <div className="demo-root">
            <Card>
                <CardContent>
                    <div className="notifcation">
                        <Typography variant="h5">
                            Simple
                        </Typography>
                        <br/>
                        <AndroidNotification />
                    </div>
                    <div className="notifcation">
                        <Typography variant="h5">
                            Custom title and body
                        </Typography>
                        <br/>
                        <AndroidNotification title="Hey!" body="This is a cool notification" />
                    </div>
                    <div className="notifcation">
                        <Typography variant="h5">
                            Simple
                        </Typography>
                        <br/>
                        <AndroidNotification />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
render(<App />, document.getElementById("root"));
