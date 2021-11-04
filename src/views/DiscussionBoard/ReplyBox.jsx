import React, { Component } from "react";
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
} from "reactstrap";

import "./Discussion.css";

export default class ReplyBox extends Component {
  render() {
    return (
      <div className="contentBox">
        <Row>
          <Col md={12}>
            <Card className="contentCard">
              <CardHeader>
                <h2 className="disTitle">Reply</h2>
                <hr />
              </CardHeader>
              <CardBody>
                <div className="disContent">
                  <Col sm={12}>
                    <Input type="textarea" placeholder="input your reply" />
                  </Col>
                </div>
                <div>
                  <small className="authorName">
                    <Button>submit</Button>
                  </small>
                </div>
                <br />
                <br />
                <br />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
