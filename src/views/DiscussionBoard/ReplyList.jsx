import React, { Component } from "react";
import axios from "axios";
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
  Form,
  FormGroup,
  Label,
  FormText,
} from "reactstrap";
import PanelHeader from "../../components/PanelHeader/PanelHeader";
import "./Discussion.css";
import cookie from "react-cookies";

export default class ReplyList extends Component {
  state = {
    isAddReply: false,
    content: "",
    replyList: [],
    authorName: this.props.topicObj.authorName,
  };

  componentDidMount() {
    this.getContent();
    console.log("props", this.props);
  }

  getContent = () => {
    const topicName = this.props.topicObj.title;
    console.log("topicName", topicName);
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/discussion/course/topic",
          {
            params: {
              topicName: topicName,
            },
          }
        );
        if (res.status === 200) {
          const contents = res.data;
          /* console.log("contents", contents);
          const reply = [];
          for (var i = 0; i < contents.length; i++) {
            if (contents[i].type == 0) {
              const content = contents[i].content;
              this.setState({ content: content });
            } else {
              const replyContent = contents[i].content;
              const replyAuthor = contents[i].userName;
              reply[i] = {
                replyId: i,
                replyContent: replyContent,
                replyAuthor: replyAuthor,
              };
              console.log("reply", reply[i])
            }
          } */
          console.log("return",contents)
          this.setState({ replyList: contents });
        }
      } catch (err) {
        console.log(err);
      }
    })();
  };

  changeMode = () => {
    this.setState({ isAddReply: !this.state.isAddReply });
  };

  saveContent = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  handelSubmit = () => {
    console.log("new obj", this.state);
    const content = this.state.content;
    console.log(content);
    var date = new Date();
    date = date.getTime();
    const topicId = parseInt(date);
    console.log(topicId);
    const userName = cookie.load("firstName") + ' ' + cookie.load("lastName")
    const userId = cookie.load("uid")
    console.log(userName,userId);
    const type = 1
    console.log(type);
    const title = this.props.topicObj.title
    console.log(title);
    if(content == '' ){
      window.alert("please enter the title and content")
    }else{
      (async () => {
        try {
          const res = await axios.post("http://localhost:8080/discussion/course/topic", {
            content:content,
            type:type,
            topicId: topicId,
            topicName: title,
            userName: userName,
            userId:userId
          });
          if (res.status == 200 ) {
            console.log("return",res.data)
           window.location.reload();
          }
        } catch (err) {
          console.log(err);
        }
      })();
    }
    /* console.log("new obj", this.state);
    const { Content } = this.state;
    console.log("Content", Content);

    var date = new Date();
    date = date.getTime();
    const replyId = parseInt(date); */
    /**这里交给后端 */
    //先这么写，有时间再改
    /* const { replyObj } = this.state;
    const newList = [
      {
        replyTo: this.props.topicObj.TopicId, */
    /**考虑取时间戳 */
    /*  replyId: replyId, */
    /**从cookie取 */
    /*  AuthorId: 1,
        AuthorName: "AAA",
        Content: Content,
      },
      ...replyObj,
    ];
    console.log("new list", newList);
    this.setState({
      replyObj: newList,
      Content: "",
    }); */
  };

  render() {
    const  content  = this.state.replyList;
    const replyObj = this.state.replyList;
    console.log("renderr content", content);
    return (
      <div>
        <PanelHeader
          size="sm"
          content={
            <div className="header text-center">
              <h3 className="title">{this.props.topicObj.title}</h3>
            </div>
          }
        />

        <div>
          <Row>
            <Col md={12}>
              {replyObj.map((reply, i) => {
                return (
                  <Card className="contentCard" key={i}>
                    <CardBody>
                      <div className="disContent">{reply.content}</div>
                      <div>
                        <small className="authorName">
                          {reply.userName}
                        </small>
                      </div>
                      <br />
                      <br />
                      <br />
                    </CardBody>
                  </Card>
                );
              })}
            </Col>
          </Row>
        </div>

        {/*  reply list */}
        {/* {
          <div>
            <Row>
              <Col md={12}>
                {replyObj.map((reply, i) => {
                  return (
                    <Card className="contentCard" key={i}>
                      <CardBody>
                        <div className="disContent">{reply.replyContent}</div>
                        <div>
                          <small className="authorName">
                            {reply.replyAuthor}
                          </small>
                        </div>
                        <br />
                        <br />
                        <br />
                      </CardBody>
                    </Card>
                  );
                })}
              </Col>
            </Row>
          </div>
        } */}

        <div className="contentBox">
          {/* reply box */}
          {this.state.isAddReply ? (
            <div>
              <Card>
                <CardBody>
                  <Form>
                    <FormGroup row>
                      <Col sm={12}>
                        <Input
                          type="textarea"
                          name="content"
                          rows="500"
                          placeholder="Reply here"
                          onChange={this.saveContent}
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup check row style={{ margin: "10px" }}>
                      <Col
                        sm={{
                          offset: 2,
                          size: 10,
                        }}
                      >
                        <Button
                          onClick={this.handelSubmit}
                          style={{ float: "right" }}
                          color="primary"
                        >
                          Post
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
              <div style={{ textAlign: "center", fontSize: "20px" }}>
                <Button
                  style={{ shape: "circle" }}
                  onClick={this.changeMode}
                  color="warning"
                >
                  {" "}
                  Hide reply{" "}
                </Button>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              <Button
                style={{ shape: "circle" }}
                onClick={this.changeMode}
                color="success"
              >
                {" "}
                Reply{" "}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
