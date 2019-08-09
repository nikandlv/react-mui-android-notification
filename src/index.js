import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Whatshot from '@material-ui/icons/Whatshot'
import { NotificationHeader } from './NotificationHeader';
import { NotificationBody } from './NotificationBody';
import { NotificationActions } from './NotificationActions';
import { NotificationWrapper } from './NotificationWrapper';

const styles = theme => ({
  paper: {
      width:"100%",
  },
  tiny_icon: {
    fontSize: "20px",
    color: "inherit"
  },
  app_name : {
    fontSize: "11px",
    color: "inherit",
    display: "inline-block",
    verticalAlign: "super",
    paddingTop: "2px",
    paddingLeft: "4px",
  },
  timestamp : {
    fontSize: "10px",
    color: "#7e7e7e",
    display: "inline-block",
    verticalAlign: "super",
    paddingTop: "3px",
    paddingLeft: "4px"
  },
  chevron : {
    fontSize: "15px",
    color: "inherit",

    transformOrigin: "center",
    transition: "0.5s",

  },
  chevron_active: {
    transform: "rotate(-180deg)",
  },
  title : {
    color: "#444",
    fontSize: "0.844rem",
  },
  body : {
    color: "#757575",
    fontSize: "0.844rem",
    paddingTop: "3px"
  },
  top :{
    padding: "10px 15px",
    paddingBottom: "15px",
  },
  expand_group : {
    cursor: "pointer",
    userSelect: "none"
  },
  bottom: {
    background: "#eeeeee",
    padding: "0px 0px",
    transition: "0.3s",
    height: "0px",
    overflowY: "hidden",
    overflowX: "auto",

  },
  bottom_show: {
    height: "48px",
      alignItems: "center",
      display: "flex !important",
  },
  button_body : {
    whiteSpace: "nowrap",
      alignItems: "center",
      display: "none",

  },
  button : {
    color: "inherit",
    height: "48px",
    maxHeight: "48px"
  },
  add : {
    fontSize: "20px"
  },
  gone : {
    display: "none"
  },
  v2 : {
    borderRadius:16
  },
  v2_bottom: {
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16
  },
    rounded:{
        borderBottomLeftRadius:4,
        borderBottomRightRadius:4,
    }
});

class AndroidNotification extends React.Component {
    state = {
        expand:false
    }
    render() {
        const noAction = ()=> {};

        const {classes, theme} = this.props;
        const buttons = this.props.buttons || [];
        const expand = this.props.expand|| this.state.expand;
        const onExpand = this.props.onExpand|| (
            () => {
                if (hasButtons) this.setState({ expand: !expand });
            }
        );
        const name = this.props.name || "Notification";
        const title = this.props.title || "Notification Title";
        const body = this.props.body || "this is a simple notification";
        const timestamp = this.props.timeStamp || "now";
        const accent = this.props.accent || theme.palette.primary.main;
        const rounded = this.props.rounded || false;
        const icon = this.props.icon || <Whatshot />;
        const onTitleClick = this.props.onTitleClick || noAction
        const onBodyClick = this.props.onBodyClick || noAction
        const hasButtons = buttons.length !== 0;
        const v2 = this.props.v2 || false;
        return (
        <Paper square={!rounded} className={classes.paper+(v2 === true ? " "+classes.v2:"")} style={{color:accent,...this.props.styles||{}}}>
          <NotificationWrapper>
            <NotificationHeader />
            <NotificationBody />
            <NotificationActions>
              
            </NotificationActions>
          </NotificationWrapper>
        <div className={classes.top}>
          <span
            className={classes.expand_group}
            onClick={onExpand}>
             {React.cloneElement(icon, {
              className: classes.tiny_icon
                })}
            <Typography className={classes.app_name}>{name}</Typography>
            <Typography className={classes.timestamp}>•</Typography>
            <Typography className={classes.timestamp}>{timestamp}</Typography>
            <KeyboardArrowDown
              className={ (classes.chevron + " ") +
                (expand ? (classes.chevron_active + " ") : "") +
                (hasButtons ? "" : classes.gone)
              }
            />

          </span>
          <span>
            <Typography onClick={onTitleClick} className={(classes.title + ' ')+(title == ""?classes.gone:"")} variant="body1">
              {title}
            </Typography>
            <Typography onClick={onBodyClick} className={(classes.body + " ")+(body == ""?classes.gone:"")} variant="caption">
              {body}
            </Typography>
          </span>
        </div>
        <div
          className={
              (v2 === true ?classes.v2_bottom:"")+" "+(rounded?classes.rounded:"")+ ' ' + classes.bottom + ' ' + (expand ? classes.bottom_show : "") + (hasButtons ? "" : classes.gone)
          }
        >
          <div className={classes.button_body + " " + (expand ? classes.bottom_show : "")}>
            {buttons.map((button,key) => {
              return <span key={key}>{button}</span>;
            })}
          </div>
        </div>
      </Paper>
        )
    }
}

export default withStyles(styles, {withTheme: true})(AndroidNotification);
