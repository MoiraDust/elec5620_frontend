import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Button, Input, Form, FormGroup, Label, FormText } from "reactstrap";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import cookie from "react-cookies";

export default class AddStudent extends Component {

    state={
        sid:'',
        firstName:'',
        lastName:'',
        major:'',
    }

    handleId = (e) =>{
        this.setState({sid: e.target.value});
    }

    handleFirstName = (e) =>{
        this.setState({firstName: e.target.value});
    }

    handleLastName = (e) =>{
        this.setState({lastName: e.target.value});
    }

    handleMajor = (e) =>{
        this.setState({major: e.target.value});
    }

    addStudent=()=>{
        console.log("add",this.state);
        const { sid, firstName,lastName, major } = this.state;
        if(sid == '' || firstName == '' || lastName == '' || major == ''){
            window.alert("please re-enter the information")
        }else{
            const acc = firstName+lastName.substring(0,2)+sid;
            console.log("acc",acc);
            (async () => {
                try {
                  const res = await axios.post("http://localhost:8080/api/user/addUser", {
                    sid:sid,
                    acc:acc,
                    firstName: firstName,
                    lastName: lastName,
                    major: major
                  });
                  if (res.status === 200) {
                   /*  window.location.href = '/' */
                   console.log(res.data);
                   if(res.data === 'success'){
                    /* window.location.href = '/' */
                   }else{
                       window.alert("unknown error");
                   }
                  }
                } catch (err) {
                  console.log(err);
                }
              })();
        }
    }
  render() {
    return (
      <Card>
        <CardHeader>
          {" "}
          <h5 className="title">Add Student</h5>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup row>
              <Label sm={2}>Account Number</Label>
              <Col sm={10}>
                <Input name="student_id" onChange={this.handleId}/>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Student First Name</Label>
              <Col sm={10}>
                <Input name="student_name" onChange={this.handleFirstName}/>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Student Last Name</Label>
              <Col sm={10}>
                <Input name="student_name" onChange={this.handleLastName}/>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Student Major</Label>
              <Col sm={10}>
                <Input name="student_major" onChange={this.handleMajor}/>
              </Col>
            </FormGroup>

           {/*  <FormGroup row>
              <Label for="exampleFile" sm={2}>
                File
              </Label>
              <Col sm={8}>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>Click Here Choose Picture</FormText>
              </Col>
            </FormGroup> */}

            <FormGroup check row>
              <Col
                sm={{
                  offset: 2,
                  size: 10,
                }}
              >
                <Button onClick={this.addStudent}>Submit</Button>
                {/* <Button onClick={this.testSpring}>测试跨域</Button> */}
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
