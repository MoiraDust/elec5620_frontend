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
    account: cookie.load("account"),
    uid: cookie.load("uid"),
    firstName: cookie.load("firstName"),
    lastName: cookie.load("lastName"),
    userName: cookie.load("firstName") + " " + cookie.load("lastName"),
    introduce: cookie.load("intro"),
    email: cookie.load("email"),
    address: cookie.load("address"),
    postalCode: cookie.load("post"),
    country: cookie.load("country"),
    major: cookie.load("major"),
    userInfo: {
      // fristName: cookie.load("firstName"),
      // lastName: cookie.load("lastName"),
      // userImage: "smho0607.jpg",
      // userName: cookie.load("firstName") + " " + cookie.load("lastName"),
      // introduce:cookie.load("intro"),
      // email: cookie.load("email"),
      // address: cookie.load("address"),
      // postalCode: cookie.load("post"),
      // country: cookie.load("country"),
      // major: cookie.load("major"),
    },
  };

  componentDidMount() {
    console.log("account", this.state.account);
    const { account } = this.state;
    const { uid } = this.state;
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/profile/getUserProfile",
          {
            params: {
              account: account,
            },
          }
        );
        if (res.status === 200) {
          console.log("res", res.data);
          const list = res.data;
          const infoList = list[0];
          console.log(infoList);
          this.setState({
            userInfo: {
              firstName: infoList.firstName,
              lastName: infoList.lastName,
              introduce: infoList.intro,
              email: infoList.email,
              address: infoList.address,
              postalCode: infoList.post,
              country: infoList.country,
              major: infoList.major,
              userName: infoList.account,
            },
          });
        }
        /* this.setState({
         
          // fristName: data.
          // lastName: data.
          // userImage: data.
          // userName: data.
          // introduce:data.
          // email: data.
          // address: data.
          // postalCode: data.
          // country: data.
          // major: data.
        }); */
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

  submitUserInfo = () => {
    console.log("submit state",this.state);
    (async () => {
      try {
        const res = await axios.post(
          "http://localhost:8080/profile/postUserProfile",
          {
            userName: this.state.account,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            postCode: this.state.post,
            country: this.state.country,
            introduce: this.state.intro,
            major: this.state.major,
          }
        );
        if (res.status === 200) {
          // console.log(res.data);
          window.alert("success!");
          window.location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    })();
  };

  saveEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  saveAddress = (event) => {
    this.setState({ address: event.target.value });
  };

  savePost = (event) => {
    this.setState({ post: event.target.value });
  };

  saveCountry = (event) => {
    this.setState({ country: event.target.value });
  };

  saveIntro = (event) => {
    this.setState({ intro: event.target.value });
  };

  render() {
    const { userInfo } = this.state;
    console.log("userInfo", userInfo);
    return (
      <div>
        <Col className="card-middle" md="8">
          <Card className="card-user">
            <div className="image">
              {/* <img alt="..." src={require("assets/img/bg5.jpg").default} /> */}
            </div>
            <CardBody>
              <div className="author">
                <img
                  alt="..."
                  className="avatar border-gray"
                  src={require("assets/img/a.png").default}
                />
                <h5 className="title">
                  {userInfo.firstName + " " + userInfo.lastName}
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
                      <label>Major</label>
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
                      <label>Username</label>
                      <Input
                        defaultValue={userInfo.userName}
                        disabled
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
                        onChange={this.saveEmail}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>First Name</label>
                      <Input
                        defaultValue={userInfo.firstName}
                        placeholder="first name"
                        disabled
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
                        disabled
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
                        onChange={this.saveAddress}
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
                        onChange={this.savePost}
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
                        onChange={this.saveCountry}
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
                        onChange={this.saveIntro}
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
                        onClick={this.submitUserInfo}
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
