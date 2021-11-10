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
  Input,
  Form,
  FormGroup,
  Label,
  FormText,
} from "reactstrap";

import PanelHeader from "../../components/PanelHeader/PanelHeader";

import "./Discussion.css";

export default class DiscussionList extends Component {
  state = {
    isAddTitle: false,
  };

  changeMode = () => {
    this.setState({ isAddTitle: !this.state.isAddTitle });
  };

  componentDidMount() {
    console.log("componentDidMount,props",this.props);

  }

  render() {
    const courseName = this.props.location.state.CourseObj.CourseObj.courseName;
    const TopicObj = this.props.location.state.CourseObj.CourseObj.topicObj;
    console.log("courseName,", courseName);
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
              <Row key={topic.id}>
                <Col md={12} xs={12} className="cardPosition">
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4">
                        <Link
                          to={{
                            pathname: `/discussion/topic/?topicId=${topic.id}`,
                            state: {
                              TopicObj: { topic },
                            },
                          }}
                        >
                          {topic.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardBody>{topic.authorName}</CardBody>
                  </Card>
                </Col>
              </Row>
            );
          })}

          {this.state.isAddTitle ? (
            <div>
              <Card>
                <CardTitle style={{ textAlign: "center" }}>
                  <h3 style={{ margin: "10px" }}>New Topic</h3>
                </CardTitle>
                <CardBody>
                  <Form>
                    <FormGroup row>
                      <Label sm={1} style={{ textAlign: "center" }}>
                        Title
                      </Label>
                      <Col sm={11}>
                        <Input name="title" onChange={this.handleTitle} />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Label sm={1} style={{ textAlign: "center" }}>
                        Content
                      </Label>
                      <Col sm={11}>
                        <Input
                          type="textarea"
                          name="content"
                          rows="500"
                          onChange={this.handleContent}
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup check row style={{ margin: "10px" }}>
                      <Col
                        sm={{
                          offset: 2,
                          size: 10,
                        }}
                      >
                        <Button
                          onClick={this.addStudent}
                          style={{ float: "right" }}
                          color="primary"
                        >
                          Post
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
              <div style={{ textAlign: "center", fontSize: "20px" }}>
                <Button
                  style={{ shape: "circle" }}
                  onClick={this.changeMode}
                  color="warning"
                >
                  {" "}
                  -{" "}
                </Button>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              <Button
                style={{ shape: "circle" }}
                onClick={this.changeMode}
                color="success"
              >
                {" "}
                +{" "}
              </Button>
            </div>
          )}
        </div>
      </>
    );
  }
}
