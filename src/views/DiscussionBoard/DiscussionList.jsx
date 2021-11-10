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
import axios from "axios";
import cookie from "react-cookies";
import DiscussionContent from "./DiscussionContent.jsx"
import Logout from "../../components/Login/Logout.jsx";

import PanelHeader from "../../components/PanelHeader/PanelHeader";

import "./Discussion.css";

export default class DiscussionList extends Component {
  state = {
    isAddTitle: false,
    courseName:'',
    TopicList:[],
    content:'',
    title:''
  };

  changeMode = () => {
    this.setState({ isAddTitle: !this.state.isAddTitle });
  };

  componentDidMount() {
    console.log("componentDidMount,props", this.props);
    this.getAllTopic();
  }

  getAllTopic =()=>{
    const courseName = this.props.location.state.CourseObj.CourseObj.courseName;
    (async () => {
      try {
          const res = await axios.post(
              "http://localhost:8080/discussion/course",
              {
                courseName: courseName,
              }
            );
        if (res.status === 200) {
          this.setState({TopicList:res.data});
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }

  saveTitle =(event)=>{
    this.setState({title:event.target.value});
  }

  saveContent =(event)=>{
    this.setState({content:event.target.value});
  }

  handleContent =()=>{
    const userName = cookie.load("firstName") + ' ' + cookie.load("lastName")
    const userId = cookie.load("uid")
    const type = 0
    var date = new Date();
    date = date.getTime();
    const topicId = parseInt(date);
    const content = this.state.content
    const title = this.state.title
    console.log(userName,userId,type,topicId,content,title)
    if(content == '' || title == ''){
      window.alert("please enter the title and content")
    }else{
      (async () => {
        try {
          const res = await axios.post("http://localhost:8080/discussion/course/topic", {
            content:content,
            type:type,
            topicId: topicId,
            topicName: title,
            userName: userName,
            userId:userId
          });
          const response = await axios.post("http://localhost:8080/discussion/course/add/topic", {

            courseName: this.props.location.state.CourseObj.CourseObj.courseName,
            title:title,
            authorId:userId,
            authorName:userName
          });
          if (res.status == 200 && response.status == 200) {
            console.log("return",res.data)
            window.location.reload();
          }
        } catch (err) {
          console.log(err);
        }
      })();
    }

  }

  render() {
    const courseName = this.props.location.state.CourseObj.CourseObj.courseName;
    const {TopicList} = this.state;
    console.log("courseName,", courseName);
    console.log("TopicList,", TopicList);
    return (
      <>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">Course Name : {courseName}</h2>
            </div>
          }
        />
        <Logout />
        <div className="content">
          {TopicList.map((topic) => {
            return (
              <Row key={topic.id}>
                <Col md={12} xs={12} className="cardPosition">
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4">
                        <Link
                          to={{
                            pathname: `/topic/?topicId=${topic.title}`,
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
                        <Input name="title" onChange={this.saveTitle} />
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
                          onChange={this.saveContent}
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
                          onClick={this.handleContent}
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
          <Route path="/topic" component={DiscussionContent} />
        </div>
      </>
    );
  }
}
