import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Button, Input, Form, FormGroup, Label, FormText } from "reactstrap";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import cookie from "react-cookies";

import AddStudent from "./AddStudent.jsx";

import PanelHeader from "../../../components/PanelHeader/PanelHeader";

import "./face.css";
import TextArea from "rc-textarea";

export default class FaceManage extends Component {
  state = {
    StudentList: [],
    StudentHasNoPic: [],
    StudentHasPic: [],
    operate: "slist",
    isVisible: false,
    img: "",
    name:"",
  };

  /**控制弹窗 */
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  handleOk = () => {
    console.log("点击了确定");
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  showUpload = (id, name) => {
    return (event) => {
      this.setState({ isVisible: !this.state.isVisible, uid: id, name:name });
    };
  };

  /**图片 */
  handlesubmit = () => {
    /* const input = document.getElementById("img");
    input.click(); */
    const input = document.getElementById("value");
    this.setState({ img: input.value });
  };

  changeImg = () => {
    var reader = new FileReader();
    var AllowImgFileSize = 2100000; //上传图片最大值(单位字节)（ 2 M = 2097152 B ）超过2M上传失败
    //拿到上传的图片
    var file = document.getElementById("img").files[0];
    var files = file.name.split(".");
    var name = files[files.length - 1];
    var type = ["png", "jpg", "jpeg"];
    //判断图片格式
    if (type.indexOf(name) === -1) {
      message.info(`Please do not upload .${name} picture`);
      return;
    }
    var imgUrlBase64;
    if (file) {
      //将文件以Data URL形式读入页面
      imgUrlBase64 = reader.readAsDataURL(file);
      reader.onload = function (e) {
        if (AllowImgFileSize !== 0 && AllowImgFileSize < reader.result.length) {
          message.info("The pic should less than 2MB!");
          return;
        } else {
          const input = document.getElementById("value");
          input.value = reader.result;
        }
      };
    }
  };

  handleUpload = () => {
    if(this.state.img===""){
      window.alert("please choose a picture and click the confirm first")
    }
    console.log("Upload", this.state);
    (async () => {
      try {
        const res = await axios.post("http://localhost:8080/api/user/addImg", {
          uid: this.state.uid,
          img: this.state.img,
          name: this.state.name,
        });
        if (res.status === 200) {
          console.log(res.data);
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
  };

  changeToSlist = () => {
    this.setState({ operate: "slist" });
    console.log("set", this.state);
  };

  changeToAdd = () => {
    this.setState({ operate: "add" });
    console.log("set", this.state);
  };

  /* testSpring = () => {
    console.log("测试跨域问题！");
    axios */
  /*   .get("http://localhost:8081/api/user/getAllUsers")  */
  /*  axios.post("http://localhost:8080/api/user/test", {
        test: "hhello",
      })*/
  /* .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }; */

  componentDidMount() {
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/user/findAllStudent"
        );
        if (res.status == 200) {
          console.log("res", res.data);
          const StudentList = res.data;
          const StudentHasNoPic = [];
          const StudentHasPic = [];
          for (var i = 0; i < StudentList.length; i++) {
            if (StudentList[i].image == 0) {
              StudentHasNoPic[i] = StudentList[i];
            } else {
              StudentHasPic[i] = StudentList[i];
            }
          }
          this.setState({
            StudentList: res.data,
            StudentHasPic: StudentHasPic,
            StudentHasNoPic: StudentHasNoPic,
          });
          console.log("state", this.state);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }

  render() {
    const { StudentList } = this.state;
    const { StudentHasNoPic } = this.state;
    const { StudentHasPic } = this.state;
    console.log("state", this.state);
    console.log("StudentList in render", StudentList);
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col>
              <ul className="faceul">
                <li className="faceli">
                  <Button onClick={this.changeToSlist} color="primary">
                    Student List
                  </Button>
                  &nbsp;&nbsp;
                </li>
                <li className="faceli">
                  <Button onClick={this.changeToAdd} color="primary">
                    Add Student
                  </Button>
                  &nbsp;&nbsp;
                </li>
              </ul>
            </Col>

            {this.state.operate === "slist" ? (
              <Col md={12}>
                <Card>
                  <CardHeader>
                    {" "}
                    <h5 className="title" style={{ textAlign: "center" }}>
                      Student List
                    </h5>
                  </CardHeader>
                  <CardBody>
                    {StudentHasPic.map((studentObj) => {
                      return (
                        <div key={studentObj.id}>
                          <Row md={12}>
                            <Col md={4}>
                              <h6 className="tableCenter">{studentObj.id}</h6>
                            </Col>
                            <Col md={4}>
                              <h6>
                                {studentObj.firstName +
                                  " " +
                                  studentObj.lastName}
                              </h6>
                            </Col>
                            <Col md={4}>
                              <a href={studentObj.image}>View Photo</a>
                            </Col>
                          </Row>
                          <hr />
                        </div>
                      );
                    })}
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    {" "}
                    <h5 className="title" style={{ textAlign: "center" }}>
                      The List of Students do not have Picture
                    </h5>
                  </CardHeader>
                  <CardBody>
                    {StudentHasNoPic.map((studentObj) => {
                      return (
                        <div key={studentObj.id}>
                          <Row md={12}>
                            <Col md={4}>
                              <h6 className="tableCenter">{studentObj.id}</h6>
                            </Col>
                            <Col md={4}>
                              <h6>
                                {studentObj.firstName +
                                  " " +
                                  studentObj.lastName}
                              </h6>
                            </Col>
                            <Col md={4}>
                              <Button
                                size="sm"
                                onClick={this.showUpload(
                                  studentObj.id,
                                  studentObj.firstName + ' '+
                                  studentObj.lastName
                                )}
                              >
                                Add Photo
                              </Button>
                            </Col>
                          </Row>
                          <hr />
                        </div>
                      );
                    })}
                  </CardBody>
                </Card>
              </Col>
            ) : (
              <Col md={12}>
                <AddStudent />
              </Col>
            )}
          </Row>
          <div>
            <Modal isOpen={this.state.isVisible} toggle={this.showModal}>
              <ModalHeader>Upload photo</ModalHeader>
              <ModalBody>
                <Input
                  type="file"
                  accept="image/jpeg,image/jpg,image/png"
                  multiple
                  id="img"
                  onChange={this.changeImg}
                />
                <Input
                  type="textarea"
                  id="value"
                  onChange={this.saveImgInfo}
                ></Input>
                <Button onClick={this.handlesubmit}>Confirm</Button>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.handleUpload}>
                  Submit
                </Button>
                <Button color="secondary" onClick={this.handleCancel}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>{" "}
          </div>
        </div>
      </>
    );
  }
}
