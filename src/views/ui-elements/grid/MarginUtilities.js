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

class MarginUtilities extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Margin Utilities</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            You can use margin utilities like <code>.mr-auto</code> to force
            sibling columns away from one another.
          </p>

          <div className="bd-example-row">
            <div className="bd-example">
              <Container>
                <Row>
                  <Col md="4">md="4"</Col>
                  <Col md="4" className="ml-auto col">
                    Margin Left Auto
                  </Col>
                </Row>
                <Row>
                  <Col md="3" className="ml-md-auto col">
                    md="3"
                  </Col>
                  <Col md="3" className="ml-md-auto col">
                    Margin Left Auto
                  </Col>
                </Row>
                <Row>
                  <Col md="auto" className="mr-auto col">
                    Margin Right Auto
                  </Col>
                  <Col md="auto">md="auto"</Col>
                </Row>
              </Container>
            </div>
          </div>

          <pre className="mt-1">
            <code className="language-markup">
              {`
<Container>
  <Row>
    <Col md="4">md="4"</Col>
    <Col md="4" className="ml-auto">
      Margin Left Auto
    </Col>
  </Row>
  <Row>
    <Col md="3" className="ml-md-auto">
      md="3"
    </Col>
    <Col md="3" className="ml-md-auto">
      Margin Left Auto
    </Col>
  </Row>
  <Row>
    <Col md="auto" className="mr-auto">
      Margin Right Auto
    </Col>
    <Col md="auto">md="auto"</Col>
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
export default MarginUtilities
