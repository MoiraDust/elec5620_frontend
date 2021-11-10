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
import ReplyBox from "./ReplyBox"
import ReplyList from "./ReplyList"
import "./Discussion.css"

export default class DiscussionContent extends Component {

  state = {
    replyContent:"",
  }

  componentDidMount() {
    console.log("this.props",this.props);
    /* const replyObj = this.props.location.state.TopicObj.topic.replyObj
    const topicObj = this.props.location.state.TopicObj.topic
    console.log("topicObj",topicObj);
    console.log("replyObj",replyObj); */
  }

  render() {
    const replyObj = this.props.location.state.TopicObj.topic.replyObj
    const topicObj = this.props.location.state.TopicObj.topic
    return (
      <>
       <PanelHeader size="sm" />
      <div className="contentBox">
        <Row>
          <Col md={12}>
            <Card className="contentCard">
              <CardHeader>
                <h3 className="disTitle">{topicObj.title}</h3>
                <hr/>
              </CardHeader>
              <CardBody>
                <div className="disContent">
                  <blockquote>
                    <p>
                    {topicObj.content}{" "}
                    </p>
                  </blockquote>
                </div>
                <div>
                <small className="authorName">
                   -- {topicObj.authorName}
                </small>
                </div>
                <br/>
                <br/>
                <br/>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </div>
        <ReplyList replyObj={replyObj} topicObj={topicObj}/>
      </>
    );
  }
}
