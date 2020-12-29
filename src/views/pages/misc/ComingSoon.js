import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
  Label,
  Button
} from "reactstrap"
import csImg from "../../../assets/img/pages/rocket.png"
import "../../../assets/scss/pages/coming-soon.scss"
import Countdown from "react-countdown-now"

class ComingSoon extends React.Component {
  renderTimer = ({ days, hours, minutes, seconds }) => {
    return (
      <React.Fragment>
        <div className="clockCard px-1">
          <p>{days}</p>
          <p className="bg-amber clockFormat lead px-1 black"> Days </p>
        </div>
        <div className="clockCard px-1">
          <p>{hours}</p>
          <p className="bg-amber clockFormat lead px-1 black"> Hours </p>
        </div>
        <div className="clockCard px-1">
          <p>{minutes}</p>
          <p className="bg-amber clockFormat lead px-1 black"> Minutes </p>
        </div>
        <div className="clockCard px-1">
          <p>{seconds}</p>
          <p className="bg-amber clockFormat lead px-1 black"> Seconds </p>
        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <Row className="d-flex vh-100 align-items-center justify-content-center m-0">
        <Col xl="5" md="8" className="px-md-0 px-2">
          <Card className="mb-0">
            <CardHeader className="justify-content-center">
              <h2>We are launching soon</h2>
            </CardHeader>
            <CardBody className="text-center">
              <img src={csImg} alt="csImg" className="img-fluid width-150" />
              <div className="text-center getting-started pt-2 d-flex justify-content-center flex-wrap">
                <Countdown
                  date={Date.now() + 50000000000}
                  renderer={this.renderTimer}
                />
              </div>
              <div className="divider">
                <div className="divider-text">Subscribe</div>
              </div>
              <p className="text-left mb-2">
                If you would like to be notified when our app is live, Please
                subscribe to our mailing list by entering your email.
              </p>
              <Form>
                <FormGroup className="form-label-group">
                  <Input placeholder="Email" />
                  <Label>Email</Label>
                </FormGroup>
              </Form>
              <Button.Ripple block color="primary" className="btn-block">
                Subscribe
              </Button.Ripple>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default ComingSoon
