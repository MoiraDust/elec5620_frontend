import React, { Component } from "react";
import PubSub from "pubsub-js";

import {
    Alert,
    Card,
    CardTitle,
    CardBody,
    CardHeader,
    Row,
    Col,
    Button,
  } from "reactstrap";

import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ReplyList from "./ReplyList"
import Logout from "../../components/Login/Logout.jsx";
import "./Discussion.css"

export default class DiscussionContent extends Component {

  state = {
    replyContent:"",
  }

  componentDidMount() {
    console.log("props in discontent",this.props);
  }

  render() {
    const topicObj = this.props.location.state.TopicObj.topic
    return (
      <>
       <Logout />
       <ReplyList  topicObj={topicObj}/>
      </>
    );
  }
}
