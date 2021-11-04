import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

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

import "./Discussion.css";

export default class DiscussionList extends Component {
  componentDidMount() {
    /* console.log("componentDidMount,props",this.props); */
  }

  render() {
    const courseName = this.props.location.state.CourseObj.CourseObj.CourseName;
    const courseId = this.props.location.state.CourseObj.CourseObj.CourseId;
    const TopicObj = this.props.location.state.CourseObj.CourseObj.TopicObj;
    console.log("courseName,", courseName);
    console.log("courseId,", courseId);
    console.log("topicObj,", TopicObj);
    return (
      <>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">Course Name : {courseName}</h2>
            </div>
          }
        />
        <div className="content">
          {TopicObj.map((topic) => {
            return (
              <Row key={topic.TopicId}>
                <Col md={12} xs={12} className="cardPosition">
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4"><Link
                      to={{
                        pathname: `/discussion/topic/?topicId=${topic.TopicId}`,
                        state: {
                          TopicObj: {topic},
                        },
                      }}
                      >{topic.TopicTitle}</Link></CardTitle>
                    </CardHeader>
                    <CardBody>{topic.TopicAuthorName}</CardBody>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </div>
      </>
    );
  }
}
