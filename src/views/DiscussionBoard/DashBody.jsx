import React, { Component } from "react";
import axios from "axios";
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

import "./Discussion.css";
import DiscussionContent from "./DiscussionContent.jsx"


export default class DashBody extends Component {
  state = {
    TopicList: [],
  };

  componentDidMount() {
    console.log("dash body", this.props.courseName);
    this.getAllTopic();
  }
  getAllTopic = () => {
    const courseName = this.props.courseName;
    (async () => {
      try {
        const res = await axios.post(
          "http://localhost:8080/discussion/course",
          {
            courseName: courseName,
          }
        );
        if (res.status === 200) {
          console.log("topic in ", courseName, " ", res.data);
          this.setState({ TopicList: res.data });
        }
      } catch (err) {
        console.log(err);
      }
    })();
  };
  render() {
    const { TopicList } = this.state;
    console.log("state", this.state);
    return (
      <div className="topic-list">
       
        {TopicList.map((topic, i) => {
          return (
            <Alert key={i} color="warning">
              <span>
                <div>
                  <Link
                    to={{
                      pathname: `/topic/?topicId=${topic.title}`,
                      state: {
                        TopicObj: { topic },
                      },
                    }}
                  >
                    <h6>{topic.title}</h6>
                  </Link>
                </div>
                <div>{topic.authorName}</div>
              </span>
            </Alert>
          );
        })}
        <Route path="/topic" component={DiscussionContent} />
      </div>
    );
  }
}
