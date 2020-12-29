import React from "react"
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import Flatpickr from "react-flatpickr";

class Datepickers extends React.Component{
  state = {
    basicPicker : new Date(),
    dateTimePicker : new Date(),
    humanFriendly:  new Date(),
    minMax: new Date(),
    disabledRange : new Date(),
    multipleDates : new Date(),
    rangePicker : new Date(),
    weekNum : new Date(),
    inlinePicker : new Date()
  }

  render(){

    let { 
          basicPicker, 
          dateTimePicker, 
          humanFriendly, 
          minMax, 
          disabledRange, 
          multipleDates, 
          rangePicker,
          weekNum,
          inlinePicker
        } = this.state

    return (<Card>
      <CardHeader>
        <CardTitle>Datepickers</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col className="mb-3" md="6" sm="12">
            <h5 className="text-bold-500">Basic</h5>
            <Flatpickr
              className="form-control"
              value={basicPicker}
              onChange={date => {
                this.setState({ basicPicker : date });
              }}
            />
          </Col>
          <Col className="mb-3" md="6" sm="12">
           <h5 className="text-bold-500">Date & Time</h5>
            <Flatpickr
              className="form-control"
              data-enable-time
              value={dateTimePicker}
              onChange={date => {
                this.setState({ dateTimePicker : date });
              }}
            />
          </Col>
          <Col className="mb-3" md="6" sm="12">
           <h5 className="text-bold-500">Human Friendly</h5>
            <Flatpickr
              className="form-control"
              value={humanFriendly}
              options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d", }}
              onChange={date => {
                this.setState({ humanFriendly : date });
              }}
            />
          </Col>
          <Col className="mb-3" md="6" sm="12">
            <h5 className="text-bold-500">Min & Max Dates</h5>
            <Flatpickr
              className="form-control"
              value={minMax}
              options={{ minDate: "today",  maxDate: new Date().fp_incr(14) }}
              onChange={date => {
                this.setState({ minMax : date });
              }}
            />
          </Col>
          <Col className="mb-3" md="6" sm="12">
            <h5 className="text-bold-500">Disabled Range</h5>
            <Flatpickr
              className="form-control"
              value={disabledRange}
              options={{ 
                dateFormat: "Y-m-d",
                disable: [
                    {
                        from: "2020-02-01",
                        to: "2020-02-10"
                    },
                    {
                        from: "2020-02-20",
                        to: "2020-02-25"
                    }
                ]
              }}
              onChange={date => {
                this.setState({ disabledRange : date });
              }}
            />
          </Col>
          <Col className="mb-3" md="6" sm="12">
            <h5 className="text-bold-500">Multiple Dates</h5>
            <Flatpickr
              className="form-control"
              value={multipleDates}
              options={{ mode: "multiple" }}
              onChange={date => {
                this.setState({ multipleDates : date });
              }}
            />
          </Col>
          <Col className="mb-3" md="6" sm="12">
            <h5 className="text-bold-500">Range</h5>
            <Flatpickr
              value={rangePicker}
              className="form-control"
              options={{  mode: "range"  }}
            />
          </Col>
          <Col className="mb-3" md="6" sm="12">
            <h5 className="text-bold-500">Preloaded Range</h5>
            <Flatpickr
              className="form-control"
              options={{ 
                mode: "range",
                defaultDate: ["2020-02-01", "2020-02-15"]
               }}
              onChange={date => {
                this.setState({ preloadRange : date });
              }}
            />
          </Col>
          <Col className="mb-md-0 mb-3" md="6" sm="12">
            <h5 className="text-bold-500">Week Numbers</h5>
            <Flatpickr
              className="form-control"
              value={weekNum}
              options={{ weekNumbers: true }}
              onChange={date => {
                this.setState({ weekNum : date });
              }}
            />
          </Col>
          <Col md="6" sm="12">
            <h5 className="text-bold-500">Inline</h5>
            <Flatpickr
              className="form-control"
              value={inlinePicker}
              options={{ inline: true }}
              onChange={date => {
                this.setState({ inlinePicker : date });
              }}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>)
  }
}

export default Datepickers