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

class ColumnBreak extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Column breaks</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            reaking columns to a new line in flexbox requires a small hack: add
            an element with <code>width: 100%</code> wherever you want to wrap
            your columns to a new line. Normally this is accomplished with
            multiple .rows, but not ever implementation method can account for
            this.
          </p>
          <div className="bd-example-row">
            <div className="bd-example">
              <Container>
                <Row>
                  <Col sm="3">sm="3"</Col>
                  <Col sm="3">sm="3"</Col>
                  <div className="w-100" />
                  <Col sm="3">sm="3"</Col>
                  <Col sm="3">sm="3"</Col>
                </Row>
              </Container>
            </div>
          </div>
          <pre className="mt-1">
            <code className="language-html">
              {`
<Container>
  <Row>
    <Col sm="3">
      sm="3"
    </Col>
    <Col sm="3">
      sm="3"
    </Col>
    <div className="w-100" />
    <Col sm="3">
      sm="3"
    </Col>
    <Col sm="3">
      sm="3"
    </Col>
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
export default ColumnBreak
