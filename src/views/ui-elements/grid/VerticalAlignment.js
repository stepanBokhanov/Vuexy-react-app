import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Container
} from "reactstrap"
// eslint-disable-next-line
import prism from "prismjs"

class VerticalAlignment extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Vertical Alignment</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="bd-example-row bd-example-row-flex-cols">
            <div className="bd-example">
              <Container>
                <Row className="align-items-start">
                  <Col>One of three columns</Col>
                  <Col>Two of three columns</Col>
                  <Col>Three of three columns</Col>
                </Row>
                <Row className="align-items-center">
                  <Col>One of three columns</Col>
                  <Col>Two of three columns</Col>
                  <Col>Three of three columns</Col>
                </Row>
                <Row className="align-items-end">
                  <Col>One of three columns</Col>
                  <Col>Two of three columns</Col>
                  <Col>Three of three columns</Col>
                </Row>
              </Container>
            </div>
          </div>

          <pre className="mt-2">
            <code className="language-html">
              {`
<Container>
  <Row className="align-items-start">
    <Col>One of three columns</Col>
    <Col>Two of three columns</Col>
    <Col>Three of three columns</Col>
  </Row>

  <Row className="align-items-center">
    <Col>One of three columns</Col>
    <Col>Two of three columns</Col>
    <Col>Three of three columns</Col>
  </Row>

  <Row className="align-items-end">
    <Col>One of three columns</Col>
    <Col>Two of three columns</Col>
    <Col>Three of three columns</Col>
  </Row>
</Container>
    `}
            </code>
          </pre>
        </CardBody>
      </Card>
    )
  }
}
export default VerticalAlignment
