import React, { Component } from "react";
import PubSub from "pubsub-js";
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

  state = {
    replyObj:this.props.replyObj
  };

  saveContent = (event) => {
    this.setState({ 
      Content: event.target.value,
     });
  };
  handelSubmit = () => {
    console.log("new obj", this.state);
    const { Content } = this.state;
    console.log("Content",Content);

    var date = new Date();
    date = date.getTime();
    const replyId = parseInt(date);
    /**这里交给后端 */
    //先这么写，有时间再改
    const { replyObj } = this.state
    const newList = [{
    replyTo: this.props.topicObj.TopicId,
    /**考虑取时间戳 */
    replyId: replyId,
      /**从cookie取 */
    AuthorId: 1,
    AuthorName: "AAA",
    Content:Content,
    },...replyObj]
    console.log("new list", newList);
    this.setState({
      replyObj:newList,
      Content: ''
    })
  };

  render() {
    const replyObj = this.state.replyObj;
    console.log("replyObj", replyObj);
    console.log("init state",this.state)
    return (
      <div>
        <div className="contentBox">
          <Row>
            <Col md={12}>
              {replyObj === undefined ? (
                <div></div>
              ) : (
                replyObj.map((reply) => {
                  return (
                    <Card className="contentCard" key={reply.replyId}>
                      <CardBody>
                        <div className="disContent">
                          <Col sm={12}>{reply.Content}</Col>
                        </div>
                        <div>
                          <hr />
                          <small className="authorName">
                            {reply.AuthorName}
                          </small>
                        </div>
                        <br />
                        <br />
                        <br />
                      </CardBody>
                    </Card>
                  );
                })
              )}
            </Col>
          </Row>
          {/* reply box */}
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
                      <Input
                        type="textarea"
                        placeholder="input your reply"
                        onChange={this.saveContent}
                        name="Content"
                      />
                    </Col>
                  </div>
                  <div>
                    <small className="authorName">
                      <Button onClick={this.handelSubmit}>submit</Button>
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
      </div>
    );
  }
}
