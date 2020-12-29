import React from "react"
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import Flatpickr from "react-flatpickr";

class Timepickers extends React.Component{
  state ={
    basic : new Date(),
    timeLimit : new Date(),
    preloaded : new Date()
  }

  render(){
    let { basic, timeLimit } = this.state
    return(
      <Card>
        <CardHeader>
          <CardTitle>Timepickers</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col className="mb-3" md="6" sm="12">
              <h5 className="text-bold-500">Basic 24hrs</h5>
              <Flatpickr
                className="form-control"
                value={basic}
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "H:i",
                }}
                onChange={date => {
                  this.setState({ basic : date });
                }}
              />
            </Col>
            <Col className="mb-3" md="6" sm="12">
              <h5 className="text-bold-500">Limit</h5>
              <Flatpickr
                className="form-control"
                value={timeLimit}
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "H:i",
                  minTime: "16:00",
                  maxTime: "22:30"
                }}
                onChange={date => {
                  this.setState({ timeLimit : date });
                }}
              />
            </Col>
            <Col className="mb-3" md="6" sm="12">
              <h5 className="text-bold-500">Preloaded</h5>
              <Flatpickr
                className="form-control"
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "H:i",
                  defaultDate: "13:45"
                }}
                onChange={date => {
                  this.setState({ preloaded : date });
                }}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default Timepickers