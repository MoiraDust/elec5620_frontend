import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from "reactstrap";
import cookie from 'react-cookies'

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

// import {
//   // dashboardPanelChart,
//   dashboardShippedProductsChart,
//   dashboardAllProductsChart,
//   dashboard24HoursPerformanceChart,
// } from "variables/charts.js";

function Attendance() {

  const uid = cookie.load("uid")
  console.log("uid",uid)

const studentAtten={
  course1:{
    courseName:"INFO3963",
    atten:{week1:true,week2:false,week3:true,week4:false,week5:true},
    
  },
  course2:{
    courseName:"COMP4983",
    atten:{week1:true,week2:true,week3:true,week4:true,week5:true},
    
  },
  course3:{
    courseName:"IDEA2369",
    atten:{week1:true,week2:false,week3:true,week4:true,week5:true},
    
  },
  course4:{
    courseName:"ELEC8724",
    atten:{week1:true,week2:true,week3:true,week4:false,week5:true},
  },
  attendenceTrend:[2,3,4,3,4],
};


const dashboardPanelChart = {
  data: (canvas) => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: [
        "week1",
        "week2",
        "week3",
        "week4",
        "week5",
      ],
      datasets: [
        {
          label: "Data",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#2c2c2c",
          pointHoverBackgroundColor: "#2c2c2c",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          tension: 0.4,
          data: studentAtten.attendenceTrend,
        },
      ],
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#fff",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          fontColor: "rgba(255,255,255,0.4)",
          fontStyle: "bold",
          beginAtZero: true,
          maxTicksLimit: 5,
          padding: 10,
        },
        grid: {
          drawTicks: true,
          drawBorder: false,
          display: true,
          color: "rgba(255,255,255,0.1)",
          zeroLineColor: "transparent",
        },
      },
      x: {
        grid: {
          display: false,
          color: "rgba(255,255,255,0.1)",
        },
        ticks: {
          padding: 10,
          fontColor: "rgba(255,255,255,0.4)",
          fontStyle: "bold",
        },
      },
    },
  },
}; 

  return (
    <>
      <PanelHeader
        size="lg"
        content={
          <Line
            data={dashboardPanelChart.data}
            options={dashboardPanelChart.options}
          />
        }
      />
      <div className="content">
        
        <Row>
          
          <Col xs={12} md={12}>
            <Card>
              <CardHeader>
                <h5 className="card-category">All Courses List</h5>
                <CardTitle tag="h4">Attendence Stats</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Time</th>
                      <th>{studentAtten.course1.courseName}</th>
                      <th>{studentAtten.course2.courseName}</th>
                      <th>{studentAtten.course3.courseName}</th>
                      <th>{studentAtten.course4.courseName}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Week1</td>
                      <td>{studentAtten.course1.atten.week1? "√" :"Absent"}</td>
                      <td>{studentAtten.course2.atten.week1? "√" :"Absent"}</td>
                      <td>{studentAtten.course3.atten.week1? "√" :"Absent"}</td>
                      <td >{studentAtten.course4.atten.week1? "√" :"Absent"}</td>
                    </tr>
                    <tr>
                    <td>Week2</td>
                      <td>{studentAtten.course1.atten.week2? "√" :"Absent"}</td>
                      <td>{studentAtten.course2.atten.week2? "√" :"Absent"}</td>
                      <td>{studentAtten.course3.atten.week2? "√" :"Absent"}</td>
                      <td >{studentAtten.course4.atten.week2? "√" :"Absent"}</td>
                    </tr>
                    <tr>
                    <td>Week3</td>
                      <td>{studentAtten.course1.atten.week3? "√" :"Absent"}</td>
                      <td>{studentAtten.course2.atten.week3? "√" :"Absent"}</td>
                      <td>{studentAtten.course3.atten.week3? "√" :"Absent"}</td>
                      <td >{studentAtten.course4.atten.week3? "√" :"Absent"}</td>
                    </tr>
                    <tr>
                    <td>Week4</td>
                      <td>{studentAtten.course1.atten.week4? "√" :"Absent"}</td>
                      <td>{studentAtten.course2.atten.week4? "√" :"Absent"}</td>
                      <td>{studentAtten.course3.atten.week4? "√" :"Absent"}</td>
                      <td >{studentAtten.course4.atten.week4? "√" :"Absent"}</td>
                    </tr>
                    <tr>
                    <td>Week5</td>
                      <td>{studentAtten.course1.atten.week5? "√" :"Absent"}</td>
                      <td>{studentAtten.course2.atten.week5? "√" :"Absent"}</td>
                      <td>{studentAtten.course3.atten.week5? "√" :"Absent"}</td>
                      <td >{studentAtten.course4.atten.week5? "√" :"Absent"}</td>
                     
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Attendance;
