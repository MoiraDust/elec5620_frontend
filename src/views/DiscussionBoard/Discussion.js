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
import PanelHeader from "../../components/PanelHeader/PanelHeader";

import DiscussionDashboard from "./DiscussionDashboard";

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
            Welcome to <b>Discussion Board</b>
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
            <p className="category">Please Choose one course.</p>
          </div>
        }
      />
      <div className="content">
       <DiscussionDashboard />
      </div>
    </>
  );
}

export default Discussion;
