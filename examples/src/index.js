import React from 'react';
import { render } from 'react-dom';
import AndroidNotification from '../../src';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Highlight from 'react-highlight'
import IconButton from '@material-ui/core/IconButton'
import Add from '@material-ui/icons/Add'
import Message from '@material-ui/icons/Message'
import 'normalize.css'
import './index.css'
import './theme.css'
import Divider from '@material-ui/core/Divider';
const items = [
    {
        title: "Simple Notification",
        props: {
        },
        body: "this is a basic notification without any props and actions"
    },
    {
        title: "Notification with title, body and time",
        props: {
            title:"Awesome Notification",
            body:"this is an awesome notification !",
            timeStamp:"Nov 6"
        },
        body: "this is a basic notification with custom title and body with no actions "
    },
    {
        title: "Notification with name, title and body",
        props: {
            name:"Awesome Notification",
            title:"Awesome Notification",
            body:"this is an awesome notification !"
        },
        body: "this is a basic notification with custom name, title and and body"
    }
    ,
    {
        title: "Notification with Button and IconButton and custom icon",
        props: {
            name:"Messages",
            title:"Luv",
            body:"Sorry but i dont love you back ...",
            icon:<Message />,
            buttons:[<Button>Replay</Button>,<Button>Mark as read</Button>,<IconButton><Add/></IconButton>],
        },
        propsString: {
            buttons:'[<Button>Replay</Button>,<Button>Mark as read</Button>]',
            icon:'<Message />'
        },
        body: "this is a basic notification with custom name, title body with 2 buttons and 1 iconbutton"
    },
    {
        title: "Notification with Button and IconButton and custom icon",
        props: {
            name:"Messages",
            title:"Luv",
            body:"Sorry but i dont love you back ...",
            onTitleClick:()=> {
                alert("title clicked!");
            },
            onBodyClick:()=> {
                alert("body clicked!");
            },
            icon:<Message />,
            buttons:[<Button>Replay</Button>,<Button>Mark as read</Button>,<IconButton><Add/></IconButton>],
        },
        propsString: {
            buttons:'[<Button>Replay</Button>,<Button>Mark as read</Button>]',
            icon:'<Message />'
        },
        body: 'this is a basic notification with custom name, title body with 2 buttons and 1 iconbutton and hooks for title/body click'
    }
]
function formatWithProps(entry) {
    let result = "<AndroidNotification  "
    let keys = Object.keys(entry.props)
    keys.map((key, index) => {
        let item = entry.props[key];
        result += "\n\t";
        result += key + "=";
        if(typeof entry.propsString !== 'undefined') {
            if (typeof entry.propsString[key] !== 'undefined') {
                result += "{"+entry.propsString[key]+"}";
                return
            }
        }
        
        switch (typeof item) {
            case 'string':
                result += "\"" + item + "\"";
                break;
            default:
                result += "{" + item.toString() + "}";
        }
    })
    if (keys.length > 0) {
        result += "\n"
    }
    result += "/>"
    return result;
}

class App extends React.Component {
    state = {
        expanded:false
    }
    constructor() {
        super()
        window.setTimeout(()=> {
            this.setState({expanded:true})
        },1500)
    }
    render() {
        return (
            <div className="demo-body">
        <Paper className="demo-paper">
        
            <Typography variant="display2">Android Notification</Typography>
            
            <br />
            <div className="notification">
            <AndroidNotification
                name="AndroidNotification"
                title="My Notification"
                timeStamp="Nov 6"
                body="This is an awesome Notification!!!"
                buttons={[<Button>Reply</Button>, <Button>Archive</Button>,<IconButton><Add/></IconButton>]}
                expand={this.state.expanded}
            />
            </div>
            <br />
            <Typography variant="display1">Usage</Typography>
            <br/>
            <Typography variant="title">Install it!</Typography>
            <Highlight className='c'>
                {"npm i react-mui-android-notification"}
            </Highlight>
            <br />
            <Typography variant="title">Import it!</Typography>
            <Highlight className='c'>
                {"import AndroidNotification from 'react-mui-android-notification';"}
            </Highlight>
            <Typography variant="title">Use it!</Typography>
            <Highlight className='html'>
                {"<AndroidNotification  \n"
                +"\tname:{Notification Name : string}\n"
                +"\title:{Notification Title : string}\n"
                +"\tbody:{Notification Body : string}\n"
                +"\ticon:{Notification Icon : react SvgIcon Component, default: whatshot}\n"
                +"\ttimeStamp:{Notification time : string, default : now}\n"
                +"\taccent:{Notification Accent : string, default : theme.palette.primary.main}\n"
                +"\texpand:{Notification Expand state : bool, default : false}\n"
                +"\trounded:{Notification Round state : bool, default : false}\n"
                +"\tonTitleClick:{Title click hook : function}\n"
                +"\tonBodyClick:{Body click hook : function}\n"
                +"\tonExpand:{Expand Control : function}\n"
                +"/>"
                }
            </Highlight>
            <Divider/>
            <br />
            <Typography variant="display1">Examples</Typography>
            <br />
            {
                Object.keys(items).map((k) => {
                    let item = items[k];
                    return (
                        <div key={k}>
                            <Typography variant="title">{item.title}</Typography>
                            <br />
                            <div className="notification">
                                <AndroidNotification {...item.props} />
                            </div>
                            <Highlight className='xml html js javascript'>
                                {
                                    formatWithProps(item)
                                }
                            </Highlight>
                            <Typography variant="body1">{item.body}</Typography>
                            <br/><Divider/><br/>
                        </div>
                    )
                })
            }
            <Typography variant="body2">Author: <a href="https://www.linkedin.com/in/nikan-dalvand-8a3a49142/">Nikandlv</a></Typography>
            <Typography variant="body2">Version: 1.0.2</Typography>
            <Typography variant="body2">Github : <a href="https://github.com/nikandlv/react-mui-android-notification">nikandlv/react-mui-android-notification</a></Typography>
            <Typography variant="body2">Email : nikandalvand@gmail.com</Typography>
            <Typography variant="body2">Twitter : <a href="https://twitter.com/Nikandlv">Nikandlv</a></Typography>
        </Paper>
    </div>
        )
    }
}
render(<App />, document.getElementById("root"));