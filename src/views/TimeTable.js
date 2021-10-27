import React from "react";

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

function TimeTable() {
 
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Course Schedule</CardTitle>
              </CardHeader>
              <CardBody>
                 <Table responsive>
                  <thead className="text-primary">
                    <tr>
                     
                    </tr>
                  </thead>
                  <tbody>
                    
                  </tbody>
                </Table>
               
              </CardBody>
            </Card>
          </Col>

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
