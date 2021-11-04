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

import DiscussionList from "./DiscussionList";

import PubSub from "pubsub-js";

export default class DiscussionDashboard extends Component {
  state = {
    //后台接受的数据库模拟
    /**课程 和 帖子 列表 */
    CourseList: [
      {
        CourseId: "elec5618",
        CourseName: "name1",
        StudentList: [1, 2, 3],
        TopicObj: [
          {
            TopicId: 1,
            TopicTitle: "Title1",
            TopicContent: "Content1",
            TopicAuthorId: 1,
            TopicAuthorName: "Student1",
            replyObj:[
              {
              replyTo: 1,
              replyId: 1,
              AuthorId: 1,
              AuthorName:"AAA",
              Content: "reply 1"
              },
              {
                replyTo: 1,
                replyId: 2,
                AuthorId: 2,
                AuthorName:"BBB",
                Content: "reply 2"
                },
                {
                  replyTo: 1,
                  replyId: 3,
                  AuthorId: 3,
                  AuthorName:"CCC",
                  Content: "reply 3"
                  },
          ]
          },
          {
            TopicId: 2,
            TopicTitle: "Title2",
            TopicContent: "Content2",
            TopicAuthorId: 2,
            TopicAuthorName: "Student2",
          },
        ],
      },

      {
        CourseId: "elec5619",
        CourseName: "name2",
        StudentList: [1, 2, 3],
        TopicObj: [
          {
            TopicId: 3,
            TopicTitle: "Title3",
            TopicContent: "Content3",
            TopicAuthorId: 1,
            TopicAuthorName: "Student1",
          },
          {
            TopicId: 4,
            TopicTitle: "Title4",
            TopicContent: "Content4",
            TopicAuthorId: 2,
            TopicAuthorName: "Student2",
          },
        ],
      },

      {
        CourseId: "elec5620",
        CourseName: "name3",
        StudentList: [1, 2, 3],
        TopicObj: [
          {
            TopicId: 5,
            TopicTitle: "Title5",
            TopicContent: "Content5",
            TopicAuthorId: 1,
            TopicAuthorName: "Student1",
          },
          {
            TopicId: 6,
            TopicTitle: "Title6",
            TopicContent: "Content6",
            TopicAuthorId: 2,
            TopicAuthorName: "Student2",
          },
        ],
      },

      {
        CourseId: "info590",
        CourseName: "name4",
        StudentList: [1, 2, 3],
        TopicObj: [
          {
            TopicId: 7,
            TopicTitle: "Title7",
            TopicContent: "Content7",
            TopicAuthorId: 1,
            TopicAuthorName: "Student1",
          },
          {
            TopicId: 8,
            TopicTitle: "Title8",
            TopicContent: "Content8",
            TopicAuthorId: 2,
            TopicAuthorName: "Student2",
          },
        ],
      },
    ],

    /**回帖列表 */
    CommentList: [
      {
        CourseId: "elec5218",
        TopicId: 1,
        Content: "123456",
        AuthorId: 1,
        AuthorName: "StudentName1",
      },
    ],
  };

  render() {
    const { CourseList, CommentList } = this.state;
    PubSub.publish("CourseList", { CouseList: this.state.CourseList });
    /*  PubSub.publish('CommentList',{CommentList:CommentList}) */
    /* console.log("Course", CourseList, "Comment", CommentList); */
    return (
      <div>
        <Row>
          <Col md={12} xs={12}>
            {CourseList.map((CourseObj) => {
              return (
                <Card key={CourseObj.CourseId}>
                  <CardHeader>
                    <CardTitle tag="h4">
                      {/* <Link
                        to={`/discussion/content/?courseId=${CourseObj.CourseId}`}
                        courseObj={ CourseObj }
                      > */}
                      <Link
                        to={{
                          pathname: `/discussion/course/?courseId=${CourseObj.CourseId}`,
                          state: {
                            CourseObj: {CourseObj},
                          },
                        }}
                      >
                        {CourseObj.CourseName}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    {CourseObj.TopicObj.map((topic, i) => {
                      return (
                        <Alert key={topic.TopicId} color="warning">
                          <span>
                            <div>
                              <Link
                              to={{
                                pathname: `/discussion/topic/?topicId=${topic.TopicId}`,
                                state: {
                                  TopicObj: {topic},
                                },
                              }}
                              >
                                <h5>{topic.TopicTitle}</h5>
                              </Link>
                            </div>
                            <div>{topic.TopicAuthorName}</div>
                          </span>
                        </Alert>
                      );
                    })}
                  </CardBody>
                </Card>
              );
            })}
          </Col>
        </Row>
        <Route path="/discussion/content" component={DiscussionList} />
      </div>
    );
  }
}
