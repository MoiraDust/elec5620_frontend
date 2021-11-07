import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Button, Input, Form, FormGroup, Label, FormText } from "reactstrap";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import qs from "qs";

import PanelHeader from "../../../components/PanelHeader/PanelHeader";

import "./face.css";

export default class FaceManage extends Component {
  state = {
    StudentList:[],
    operate: "slist",
  };

  changeToSlist = () => {
    this.setState({ operate: "slist" });
    console.log("set", this.state);
  };

  changeToAdd = () => {
    this.setState({ operate: "add" });
    console.log("set", this.state);
  };

  testSpring = () => {
    console.log("测试跨域问题！");
    axios
      .get("http://localhost:8080/api/user/getAllUsers")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidMount() {
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:8081/api/student/getAllStudent"
        );
        if (res.status == 200) {
          console.log("res",res.data);
          this.setState({ StudentList: res.data });
          console.log("StudentList",this.state.StudentList);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }

  render() {
    const { StudentList } = this.state;
    console.log("StudentList in render",StudentList);
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={4}>
              <Card>
                <CardBody>
                  <ul className="faceul">
                    <li className="faceli">
                      <Button onClick={this.changeToSlist}>Student List</Button>
                      &nbsp;&nbsp;
                    </li>
                    <li className="faceli">
                      <Button onClick={this.changeToAdd}>Add Student</Button>
                      &nbsp;&nbsp;
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>

            {this.state.operate === "slist" ? (
              <Col md={12}>
                <Card>
                  <CardHeader>
                    {" "}
                    <h5 className="title" style={{textAlign: "center"}}>Student List</h5>
                  </CardHeader>
               <CardBody>
                    {StudentList.map((studentObj) => {
                      return (
                        <div key={studentObj.studentId} >
                        <Row md={12}>
                        <Col md={4}>
                            <h6 className="tableCenter">{studentObj.studentId}</h6>
                          </Col>
                          <Col md={4}>
                            <h6>{studentObj.firstName + " " + studentObj.lastName}</h6>
                          </Col>
                          <Col md={4}>
                            <a href="">View Photo</a>
                          </Col>
                        </Row>
                        <hr/>
                        </div>
                      );
                    })}
                  </CardBody>
                </Card>
              </Col>
            ) : (
              <Col md={12}>
                <Card>
                  <CardHeader>
                    {" "}
                    <h5 className="title">Add Student</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label sm={2}>Student ID</Label>
                        <Col sm={10}>
                          <Input />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={2}>Student Name</Label>
                        <Col sm={10}>
                          <Input />
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Label for="exampleFile" sm={2}>
                          File
                        </Label>
                        <Col sm={8}>
                          <Input id="exampleFile" name="file" type="file" />
                          <FormText>Click Here Choose Picture</FormText>
                        </Col>
                      </FormGroup>

                      <FormGroup check row>
                        <Col
                          sm={{
                            offset: 2,
                            size: 10,
                          }}
                        >
                          <Button>Submit</Button>
                          <Button onClick={this.testSpring}>测试跨域</Button>
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            )}
          </Row>
        </div>
      </>
    );
  }
}
