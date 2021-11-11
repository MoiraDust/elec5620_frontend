import React, { Component } from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

import "./userPageStyle.css";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import cookie from "react-cookies";
import axios from "axios";

export default class UserInfo extends Component {
  state = {
    userInfo: {
      fristName: cookie.load("firstName"),
      lastName: cookie.load("lastName"),
      userImage: "smho0607.jpg",
      userName: cookie.load("firstName") + " " + cookie.load("lastName"),
      introduce:cookie.load("intro"),
      email: cookie.load("email"),
      address: cookie.load("address"),
      postalCode: cookie.load("post"),
      country: cookie.load("country"),
      major: cookie.load("major"),
    },
  };

  componentDidMount() {
    (async () => {
      try {
        const res = await axios.get("localhost:8080/profile/getUserProfile", {
          // uid: this.state.uid,
          // img: this.state.img,
          // name: this.state.name,
          
        });
        // if (res.status === 200) {
        //   // console.log(res.data);
        //   window.alert("success!");
        //   window.location.reload();
        //   if (res.data === "success") {
            
        //   } else {
        //     window.alert("unknown error");
        //   }
        // }
      } catch (err) {
        console.log(err);
      }
    })();
  }

  submitUserInfo(){
    (async () => {
      try {
        const res = await axios.post("http://localhost:8080/profile/postUserProfile", {
          uid: this.state.uid,
          img: this.state.img,
          name: this.state.name,
        });
        if (res.status === 200) {
          // console.log(res.data);
          window.alert("success!");
          window.location.reload();
          if (res.data === "success") {
            
          } else {
            window.alert("unknown error");
          }
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }

  render() {
    const { userInfo } = this.state;
    return (
      <div>
        <Col className="card-middle" md="8">
          <Card className="card-user">
            <div className="image">
              <img alt="..." src={require("assets/img/bg5.jpg").default} />
            </div>
            <CardBody>
              <div className="author">
                <img
                  alt="..."
                  className="avatar border-gray"
                  src={require("assets/img/mike.jpg").default}
                />
                <h5 className="title">
                  {userInfo.fristName + " " + userInfo.lastName}
                </h5>
              </div>
              <p className="description text-center">{userInfo.introduce}</p>
            </CardBody>
          </Card>
        </Col>

        <Col md="15">
          <Card>
            <CardHeader>
              <h5 className="title" style={{ textAlign: "center" }}>
                Edit Profile
              </h5>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>Major (disabled)</label>
                      <Input
                        defaultValue={userInfo.major}
                        disabled
                        placeholder="Major"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="px-1" md="3">
                    <FormGroup>
                      <label>Username (disabled)</label>
                      <Input
                        defaultValue={userInfo.userName}
                        placeholder="Username"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="4">
                    <FormGroup>
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <Input
                        defaultValue={userInfo.email}
                        placeholder="Email"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>First Name</label>
                      <Input
                        defaultValue={userInfo.fristName}
                        placeholder="first name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="6">
                    <FormGroup>
                      <label>Last Name</label>
                      <Input
                        defaultValue={userInfo.lastName}
                        placeholder="Last Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Address</label>
                      <Input
                        defaultValue={userInfo.address}
                        placeholder="Home Address"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-1" md="4">
                    <FormGroup>
                      <label>Postal Code</label>
                      <Input
                        defaultValue={userInfo.postalCode}
                        placeholder="ZIP Code"
                        type="number"
                      />
                    </FormGroup>
                  </Col>

                  <Col className="px-1" md="4">
                    <FormGroup>
                      <label>Country</label>
                      <Input
                        defaultValue={userInfo.country}
                        placeholder="Country"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        cols="80"
                        defaultValue={userInfo.introduce}
                        placeholder="Here can be your description"
                        rows="4"
                        type="textarea"
                      />
                    </FormGroup>
                  </Col>

                  <div style={{ textAlign: "center" }}>
                    <small
                      className="authorName"
                      style={{ textAlign: "center" }}
                    >
                      {/* <Button onClick={this.submitUserInfo}>Submit</Button> */}
                      <Button
                        className="btn btn-success"
                        /*  onClick={submitUserInfo} */
                        style={{ textAlign: "center" }}
                      >
                        Submit
                      </Button>
                    </small>
                  </div>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>

        {/* </Row> */}
      </div>
    );
  }
}
