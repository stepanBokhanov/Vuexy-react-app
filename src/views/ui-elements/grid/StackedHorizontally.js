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
// eslint-disable-next-line
import prism from "prismjs"

class StackedHorizontally extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Stacked to horizontal</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Don’t want your columns to simply stack in some grid tiers? Use a
            combination of different props for each tier as needed. See the
            example below for a better idea of how it all works.
          </p>
          <div className="bd-example-row">
            <div className="bd-example">
              <Container>
                <Row>
                  <Col sm="12" md="8">
                    sm="12" md="8"
                  </Col>
                  <Col sm="6" md="4">
                    sm="6" md="4"
                  </Col>
                </Row>
                <Row>
                  <Col md="4" sm="12">
                    md="4" sm="12"
                  </Col>
                  <Col md="4" sm="12">
                    md="4" sm="12"
                  </Col>
                  <Col md="4" sm="12">
                    md="4" sm="12"
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">sm="6"</Col>
                  <Col sm="6">sm="6"</Col>
                </Row>
              </Container>
            </div>
          </div>
          <pre className="mt-2">
            <code className="language-html">
              {`
<Container>
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <Row>
    <Col sm="12" md="8">
      sm="12" md="8"
    </Col>
    <Col sm="6" md="4">
      sm="6" md="4"
    </Col>
  </Row>

  <!-- Columns start at 33.3% wide on desktop and bump down to 100% on mobile screens-->
  <Row>
    <Col lg="4" md="4" sm="12">
      lg="4" md="4" sm="12"
    </Col>
    <Col lg="4" md="4" sm="12">
      lg="4" md="4" sm="12"
    </Col>
    <Col lg="4" md="4" sm="12">
      lg="4" md="4" sm="12"
    </Col>
  </Row>

<!-- Columns are always 50% wide, on mobile and desktop -->
  <Row>
    <Col sm="6">sm="6"</Col>
    <Col sm="6">sm="6"</Col>
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
export default StackedHorizontally
