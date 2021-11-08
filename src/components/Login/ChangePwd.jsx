import React, { Component } from 'react'

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

import cookie from "react-cookies";
import axios from "axios";

export default class ChangePwd extends Component {
    state = {
        uid:cookie.load('uid'),
        newPd:''
    }

    savePwd = (event) =>{
        this.setState({newPd:event.target.value});
    }

    handelChange = () =>{
        console.log(this.state);
        const {uid} = this.state;
        const {newPd} = this.state;

        if(newPd === ''){
            window.alert("Please enter password");
        }else{
            (async () => {
                try {
                  const res = await axios.post("http://localhost:8080/api/user/changePwd", {
                    uid: uid,
                    pwd: newPd,
                  });
                  if (res.status === 200) {
                   /*  window.location.href = '/' */
                   console.log(res.data);
                   if(res.data === 'success'){
                    window.location.href = '/'
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
        const { uid } = this.state;
        return (
            <div className="content" style={{ textAlign: 'center' }} >
                <div style={{ textAlign: 'center',marginTop: '300px',marginLeft: '650px' }}>
                <Row>
                <Col md={6}>
                <Card >
                <CardHeader><h6 style={{ textAlign: 'center' }}>
                It is your first time to login, please reset your password.</h6>
                </CardHeader>
                <CardBody>
                    <Input type="password" name="password" onChange={this.savePwd}></Input>
                    <Button onClick={this.handelChange}>submit</Button>
                </CardBody>
                </Card>
                </Col>
                </Row>
                </div>
            </div>
        )
    }
}
