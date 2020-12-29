import React from "react"
import { Card, CardBody, Button, Row, Col } from "reactstrap"
import underMaintenance from "../../../assets/img/pages/maintenance-2.png"

class Maintenance extends React.Component {
  render() {
    return (
      <Row className="m-0">
        <Col sm="12">
          <Card className="auth-card bg-transparent shadow-none rounded-0 mb-0 w-100">
            <CardBody className="text-center">
              <img
                src={underMaintenance}
                alt="underMaintenance"
                className="img-fluid align-self-center mt-75"
              />
              <h1 className="font-large-2 my-1">Under Maintenance!</h1>
              <p className="px-2 mb-0">
                paraphonic unassessable foramination Caulopteris worral
                Spirophyton encrimson esparcet aggerate chondrule restate
                whistler shallopy
              </p>
              <p className="px-2">
                biosystematy area bertram plotting unstarting quarterstaff.
              </p>
              <Button.Ripple
                tag="a"
                href="/"
                color="primary"
                size="lg"
                className="mt-1"
              >
                Back to Home
              </Button.Ripple>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default Maintenance
