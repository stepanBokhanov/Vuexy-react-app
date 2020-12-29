import React from "react"
import { Card, CardBody, Button, Row, Col } from "reactstrap"
import errorImg from "../../../../assets/img/pages/500.png"

class Error500 extends React.Component {
  render() {
    return (
      <Row className="m-0">
        <Col sm="12">
          <Card className="auth-card bg-transparent shadow-none rounded-0 mb-0 w-100">
            <CardBody className="text-center">
              <img
                src={errorImg}
                alt="ErrorImg"
                className="img-fluid align-self-center mt-75"
              />
              <h1 className="font-large-2 my-2">Internal Server Error!</h1>
              <p className="pt-2 mb-0">
                susceptive nonturbinated indoctrination formulary dyskinetic
                deafforest Strumella frolicsomeness encrustment portia
                myelination
              </p>
              <p className="pb-2">
                lachrymatory bestain hoople piscator pyramidoidal parter clipt.
              </p>
              <Button.Ripple
                tag="a"
                href="/"
                color="primary"
                size="lg"
                className="mt-2"
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
export default Error500
