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

class App extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Equal-width</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            For example, here are two grid layouts that apply to every device
            and viewport, from <code>xs</code> to <code>xl</code>. Add any
            number of unit-less props for each breakpoint you need and every
            column will be the same width.
          </p>
          <Container>
            <div className="bd-example-row">
              <div className="bd-example">
                <Row>
                  <Col>1 of 2</Col>
                  <Col>2 of 2</Col>
                </Row>
                <Row>
                  <Col>1 of 3</Col>
                  <Col>2 of 3</Col>
                  <Col>3 of 3</Col>
                </Row>
              </div>
            </div>
          </Container>
          <pre className="mt-2">
            <code className="language-html">
              {
                `
<Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
  `
              }
            </code>
          </pre>
        </CardBody>
      </Card>
    )
  }
}
export default App
