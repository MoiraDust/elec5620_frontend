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

export default class ReplyList extends Component {
  componentDidMount() {
    /* console.log("replyObj", this.props); */
  }
  render() {
      const replyObj = this.props.replyObj;
      console.log("replyObj",replyObj);
    return (
      <div>
        <div className="contentBox">
          <Row>
            <Col md={12}>
            {
              replyObj === undefined ? (<div></div>) : replyObj.map((reply)=>{
                  return(
                    <Card className="contentCard" key={reply.replyId}>
                    <CardBody>
                      <div className="disContent">
                        <Col sm={12}>
                          {reply.Content}
                        </Col>
                      </div>
                      <div>
                          <hr/>
                        <small className="authorName">
                          {reply.AuthorName}
                        </small>
                      </div>
                      <br />
                      <br />
                      <br />
                    </CardBody>
                  </Card>
                  )
              }) 
          }
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
