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
import axios from "axios";
import DashBody from "./DashBody.jsx"

import DiscussionList from "./DiscussionList";

import PubSub from "pubsub-js";

export default class DiscussionDashboard extends Component {
  state = {
    //后台接受的数据库模拟
    /**课程 和 帖子 列表 */
    CourseList: [],
  };

  componentDidMount() {
    this.getAllCourse();
  }

  getAllCourse = () => {
    console.log("getAllCourse");
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/discussion/getAllCourses"
        );
        if (res.status == 200) {
          console.log(res.data);
          const courseObj = res.data;
          const CourseList = [];
          for (var i = 0; i < courseObj.length; i++) {
            const courseName = courseObj[i].name;
            console.log("courseName",courseName);
            CourseList.push({courseName,courseName});
            /* const response = await axios.post(
              "http://localhost:8080/discussion/course",
              {
                courseName: courseName,
              }
            );
            if (response.status == 200) {
              const topicObj = response.data;
              for (var j = 0; j < topicObj.length; j++) {
                const topicTitle = topicObj[j].title;
                console.log("title: " + topicTitle);
                const response = await axios.get(
                  "http://localhost:8080/discussion/course/topic",
                  {
                    params: {
                      topicName: topicTitle,
                    },
                  }
                );
                if (response.status == 200) {
                  const contentObj = response.data[0];
                  console.log("contentObj",contentObj);
                }
              }
            } */
          }
          console.log("CourseList", CourseList);
          this.setState({ CourseList: CourseList });
        }
      } catch (err) {
        console.log(err);
      }
    })();
  };

  /* getAllTopics =()=>{
    console.log("getAllTopics");
    (async () => {
      try {
        const res = await axios.get("http://localhost:8081/api/user/getAllUsers");
        if (res.status == 200) {
          
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }
 */

  render() {
    const { CourseList } = this.state;
    console.log("CourseList render", CourseList);
    PubSub.publish("CourseList", { CouseList: this.state.CourseList });
    return (
      <div>
        <Row>
          
            {CourseList.map((CourseObj, i) => {
              return (
                <Col md={6}  key={i}>
                <Card className="dashboardbox">
                  <CardHeader>
                    <CardTitle tag="h4">
                      <Link
                        to={{
                          pathname: `/discussion/course/?courseId=${CourseObj.courseName}`,
                          state: {
                            CourseObj: { CourseObj },
                          },
                        }}
                      >
                        {CourseObj.courseName}
                      </Link>
                      <CardBody>
                      <DashBody courseName={CourseObj.courseName}/>
                      </CardBody>
                    </CardTitle>
                  </CardHeader>
                </Card>
                </Col>
              );
            })}
         
        </Row>
        <Route path="/discussion/content" component={DiscussionList} />
      </div>
    );
  }
}
