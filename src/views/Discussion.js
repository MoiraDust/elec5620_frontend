import React from "react";
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function Discussion() {
  const notificationAlert = React.useRef();
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Now UI Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  };
  return (
    <>
      <PanelHeader
        content={
          <div className="header text-center">
            <h2 className="title">Discussion Board</h2>
            <p className="category">
              Please Choose one course.
            </p>
          </div>
        }
      />
      <div className="content">
        <NotificationAlert ref={notificationAlert} />
        <Row>

          <Col md={6} xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Course 1</CardTitle>
              </CardHeader>
              <CardBody>

                <Alert outline color="info">
                  <span>Topic 1</span>
                </Alert>

                <Alert outline color="info">
                  <span>Topic 2</span>
                </Alert>

                <Alert outline color="info">
                  <span>Topic 3</span>
                </Alert>

                <Alert outline color="info">
                  <span>Topic 4</span>
                </Alert>
        
              </CardBody>
            </Card>
          </Col>

          <Col md={6} xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Course 2</CardTitle>
              </CardHeader>
              <CardBody>

                <Alert outline color="primary">
                  <span>Topic 1</span>
                </Alert>

                <Alert outline color="primary">
                  <span>Topic 2</span>
                </Alert>

                <Alert outline color="primary">
                  <span>Topic 3</span>
                </Alert>

                <Alert outline color="primary">
                  <span>Topic 4</span>
                </Alert>
        
              </CardBody>
            </Card>
          </Col>

          <Col md={6} xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Course 3</CardTitle>
              </CardHeader>
              <CardBody>

                <Alert outline color="danger">
                  <span>Topic 1</span>
                </Alert>

                <Alert outline color="danger">
                  <span>Topic 2</span>
                </Alert>

                <Alert outline color="danger">
                  <span>Topic 3</span>
                </Alert>

                <Alert outline color="danger">
                  <span>Topic 4</span>
                </Alert>
        
              </CardBody>
            </Card>
          </Col>

          <Col md={6} xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Course 4</CardTitle>
              </CardHeader>
              <CardBody>

                <Alert outline color="warning">
                  <span>Topic 1</span>
                </Alert>

                <Alert outline color="warning">
                  <span>Topic 2</span>
                </Alert>

                <Alert outline color="warning">
                  <span>Topic 3</span>
                </Alert>

                <Alert outline color="warning">
                  <span>Topic 4</span>
                </Alert>
        
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>
    </>
  );
}

export default Discussion;
