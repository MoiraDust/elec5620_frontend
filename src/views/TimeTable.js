import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
//add content to tiles
const LectureDate = [
  new Date(2021, 11, 1),
  new Date(2021, 11, 5),
];
function TimeTable() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <PanelHeader size="sm"/>
      <div className='content'>
        <h1 className='text-center'>-</h1>
        <div className='calendar-container'>
          <Calendar 
          style={{ height: 600, width: 400 } }
          onChange={setDate} 
          value={date} 
          locale="en-GB"
          selectRange={true}
          tileContent={
            ({ activeStartDate, date, view }) => {
              return view === 'month' && date.getDay() === 1
              ? <p onMouseEnter={
                  console.log('hi')
                  }>ELEC5620 Lecture</p>
              : null
            }
          }
          />
        </div>
        {date.length > 0 ? (
          <p className='text-center'>
            <span className='bold'>Start:</span>{' '}
            {date[0].toDateString()}
            &nbsp;|&nbsp;
            <span className='bold'>End:</span> {date[1].toDateString()}
          </p>
        ):(
          <p className='text-center'>
            <span className='bold'>Default selected date:</span>{' '}
            {date.toDateString()}
          </p>
        )}
      </div>
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Book Loan Record</CardTitle>
                <p className="category"> Please return or renew book in time</p>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <td>Book Name</td>
                      <td>Borrow Date</td>
                      <td>Return Date</td>
                      <td>Remain</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Book Name 1</td>
                      <td>Borrow Date 1</td>
                      <td>Return Date 1</td>
                      <td>Remain 1</td>
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

export default TimeTable;
