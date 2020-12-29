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

class HorizontalAlignment extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Horizontal Alignment</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="bd-example-row">
            <div className="bd-example">
              <Container>
                <Row className="justify-content-start">
                  <Col sm="4">One of two columns</Col>
                  <Col sm="4">Two of two columns</Col>
                </Row>
                <Row className="justify-content-center">
                  <Col sm="4">One of two columns</Col>
                  <Col sm="4">Two of two columns</Col>
                </Row>
                <Row className="justify-content-end">
                  <Col sm="4">One of two columns</Col>
                  <Col sm="4">Two of two columns</Col>
                </Row>
                <Row className="justify-content-around">
                  <Col sm="4">One of two columns</Col>
                  <Col sm="4">Two of two columns</Col>
                </Row>
                <Row className="justify-content-between">
                  <Col sm="4">One of two columns</Col>
                  <Col sm="4">Two of two columns</Col>
                </Row>
              </Container>
            </div>
          </div>

          <pre className="mt-2">
            <code className="language-html">
              {`
<Container>
  <Row className="justify-content-start">
    <Col sm="4">One of two columns</Col>
    <Col sm="4">Two of two columns</Col>
  </Row>

  <Row className="justify-content-center">
    <Col sm="4">One of two columns</Col>
    <Col sm="4">Two of two columns</Col>
  </Row>

  <Row className="justify-content-end">
    <Col sm="4">One of two columns</Col>
    <Col sm="4">Two of two columns</Col>
  </Row>

  <Row className="justify-content-around">
    <Col sm="4">One of two columns</Col>
    <Col sm="4">Two of two columns</Col>
  </Row>

  <Row className="justify-content-between">
    <Col sm="4">One of two columns</Col>
    <Col sm="4">Two of two columns</Col>
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
export default HorizontalAlignment
