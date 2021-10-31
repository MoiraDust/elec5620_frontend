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

import PanelHeader from "../../components/PanelHeader/PanelHeader";

export default class DiscussionContent extends Component {

componentDidMount() {
    PubSub.subscribe("CourseList",(_, courseObj)=>{
        console.log("courseObj",courseObj);
        this.setState(courseObj);
    })
    console.log("did mount",this.state);
}
  render() {
    return (
      <>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">Discussion Board</h2>
              <p className="category">Please Choose one course.</p>
            </div>
          }
        />
        <div className="content">
          <Card>

          </Card>
        </div>
      </>
    );
  }
}
