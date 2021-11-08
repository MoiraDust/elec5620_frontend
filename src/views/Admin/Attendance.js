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

function Attendance(props) {

  console.log(props)
  const uid = cookie.load("uid")
  console.log("uid",uid)

const studentAttenAdmin={
  stu1:{
    stuName:"John",
    atten:{week1:true,week2:false,week3:true,week4:false,week5:true},
    
  },
  stu2:{
    stuName:"Mike",
    atten:{week1:true,week2:true,week3:true,week4:true,week5:true},
    
  },
  stu3:{
    stuName:"Huang",
    atten:{week1:true,week2:false,week3:true,week4:true,week5:true},
    
  },
  stu4:{
    stuName:"Alex",
    atten:{week1:true,week2:true,week3:true,week4:false,week5:true},
  },
  stu5:{
    stuName:"Xie",
    atten:{week1:true,week2:true,week3:true,week4:false,week5:true},
  },
  stu6:{
    stuName:"Stephen",
    atten:{week1:true,week2:false,week3:true,week4:true,week5:true},
  },
  attendenceTrend:[2,6,5,4,5,6],
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
        "week6",
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
          data: studentAttenAdmin.attendenceTrend,
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
                <h5 className="card-category">All Student List</h5>
                <CardTitle tag="h4">Attendence Stats</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Time</th>
                      <th>{studentAttenAdmin.stu1.stuName}</th>
                      <th>{studentAttenAdmin.stu2.stuName}</th>
                      <th>{studentAttenAdmin.stu3.stuName}</th>
                      <th>{studentAttenAdmin.stu4.stuName}</th>
                      <th>{studentAttenAdmin.stu5.stuName}</th>
                      <th>{studentAttenAdmin.stu6.stuName}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Week1</td>
                      <td>{studentAttenAdmin.stu1.atten.week1? "√" :"Absent"}</td>
                      <td>{studentAttenAdmin.stu2.atten.week1? "√" :"Absent"}</td>
                      <td>{studentAttenAdmin.stu3.atten.week1? "√" :"Absent"}</td>
                      <td >{studentAttenAdmin.stu4.atten.week1? "√" :"Absent"}</td>
                      <td >{studentAttenAdmin.stu5.atten.week1? "√" :"Absent"}</td>
                      <td >{studentAttenAdmin.stu6.atten.week1? "√" :"Absent"}</td>
                    </tr>
                    <tr>
                    <td>Week2</td>
                      <td>{studentAttenAdmin.stu1.atten.week2? "√" :"Absent"}</td>
                      <td>{studentAttenAdmin.stu2.atten.week2? "√" :"Absent"}</td>
                      <td>{studentAttenAdmin.stu3.atten.week2? "√" :"Absent"}</td>
                      <td >{studentAttenAdmin.stu4.atten.week2? "√" :"Absent"}</td>
                      <td >{studentAttenAdmin.stu5.atten.week2? "√" :"Absent"}</td>
                      <td >{studentAttenAdmin.stu6.atten.week2? "√" :"Absent"}</td>
                    </tr>
                    <tr>
                    <td>Week3</td>
                      <td>{studentAttenAdmin.stu1.atten.week3? "√" :"Absent"}</td>
                      <td>{studentAttenAdmin.stu2.atten.week3? "√" :"Absent"}</td>
                      <td>{studentAttenAdmin.stu3.atten.week3? "√" :"Absent"}</td>
                      <td >{studentAttenAdmin.stu4.atten.week3? "√" :"Absent"}</td>
                      <td >{studentAttenAdmin.stu5.atten.week3? "√" :"Absent"}</td>
                      <td >{studentAttenAdmin.stu6.atten.week3? "√" :"Absent"}</td>

                    </tr>
                    <tr>
                    <td>Week4</td>
                      <td>{studentAttenAdmin.stu1.atten.week4? "√" :"Absent"}</td>
                      <td>{studentAttenAdmin.stu2.atten.week4? "√" :"Absent"}</td>
                      <td>{studentAttenAdmin.stu3.atten.week4? "√" :"Absent"}</td>
                      <td >{studentAttenAdmin.stu4.atten.week4? "√" :"Absent"}</td>
                      <td >{studentAttenAdmin.stu5.atten.week4? "√" :"Absent"}</td>
                      <td >{studentAttenAdmin.stu6.atten.week4? "√" :"Absent"}</td>

                    </tr>
                    <tr>
                    <td>Week5</td>
                      <td>{studentAttenAdmin.stu1.atten.week5? "√" :"Absent"}</td>
                      <td>{studentAttenAdmin.stu2.atten.week5? "√" :"Absent"}</td>
                      <td>{studentAttenAdmin.stu3.atten.week5? "√" :"Absent"}</td>
                      <td >{studentAttenAdmin.stu4.atten.week5? "√" :"Absent"}</td>
                      <td >{studentAttenAdmin.stu5.atten.week5? "√" :"Absent"}</td>
                      <td >{studentAttenAdmin.stu6.atten.week5? "√" :"Absent"}</td>

                     
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
