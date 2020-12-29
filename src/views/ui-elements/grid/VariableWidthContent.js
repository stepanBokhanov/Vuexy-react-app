import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap"

class VariableWidthContent extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Variable width content</CardTitle>
        </CardHeader>
        <CardBody>
          Use <code>[breakpoint]="auto"</code> prop to size columns based on the
          natural width of their content.
          <div className="bd-example-row mt-2">
            <div className="bd-example">
              <Container>
                <Row className="justify-content-md-center">
                  <Col lg="2">1 of 3</Col>
                  <Col md="auto">Variable width content</Col>
                  <Col lg="2">3 of 3</Col>
                </Row>
                <Row>
                  <Col>1 of 3</Col>
                  <Col md="auto">Variable width content</Col>
                  <Col lg="2">3 of 3</Col>
                </Row>
              </Container>
            </div>
          </div>
          <pre className="mt-2">
            <code className="language-html">
              {`
<Container>
  <Row className="justify-content-md-center">
    <Col lg="2">1 of 3</Col>
    <Col md="auto">Variable width content</Col>
    <Col lg="2">3 of 3</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col md="auto">Variable width content</Col>
    <Col lg="2">3 of 3</Col>
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
export default VariableWidthContent
