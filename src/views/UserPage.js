/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
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

  
function User() {

  const userInfo={
    fristName:"John",
    lastName:"Smith",
    userImage:"smho0607.jpg",
    userName:"smho0607",
    introduce:"I major in data science and I have 3 years of programming experience, and now I’m doing an internship at Google.",
    email:"smho0607@uni.sydney.edu.au",
    address:"KingStreet 206, Newtown, Sydney, NSW",
    postalCode:"20209",
    country:"Japan",
    major:"Master of Data Science"
  };

  function submitUserInfo() {
    console.log("clicked");
  }

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        {/* <Row> */}

        <Col className ="card-middle" md="8">
            <Card className="card-user">
              <div className="image">
                <img alt="..." src={require("assets/img/bg5.jpg").default} />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/mike.jpg").default}
                    />
                    <h5 className="title">{userInfo.fristName+" "+userInfo.lastName}</h5>
                  </a>
                  {/* <p className="description">michael24</p> */}
                </div>
                <p className="description text-center">
                  {userInfo.introduce}
                  {/* "Lamborghini Mercy <br />
                  Your chick she so thirsty <br />
                  I'm in that two seat Lambo" */}
                </p>
              </CardBody>
              <hr />
              <div className="button-container">
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-facebook-f" />
                </Button>
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-google-plus-g" />
                </Button>
              </div>
            </Card>
          </Col>


          <Col md="15">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
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
                        <label>Username</label>
                        <Input
                          defaultValue={userInfo.userName}
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email
                        </label>
                        <Input defaultValue={userInfo.email} placeholder="Email" type="email" />
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
                    {/* <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          defaultValue="Mike"
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col> */}
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input defaultValue={userInfo.postalCode} placeholder="ZIP Code" type="number" />
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

                    <div>
                    <small className="authorName">
                      {/* <Button onClick={this.submitUserInfo}>Submit</Button> */}
                      <Button className="btn btn-success" onClick={submitUserInfo}>Submit</Button>
                    </small>
                  </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          
        {/* </Row> */}
      </div>
    </>
  );
}

export default User;
