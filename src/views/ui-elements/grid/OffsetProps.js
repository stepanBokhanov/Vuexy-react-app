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

class OffsetProps extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Offset Props</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use <code>offset</code> prop to apply offset to your column.
          </p>

          <div className="bd-example-row">
            <div className="bd-example">
              <Container>
                <Row>
                  <Col md="4">md="4"</Col>
                  <Col md={{ size: 4, offset: 4 }}>
                    I have offset of 4 columns
                  </Col>
                </Row>
                <Row>
                  <Col md={{ size: 3, offset: 3 }}>
                    {" "}
                    I have offset of 3 columns
                  </Col>
                  <Col md={{ size: 3, offset: 3 }}>
                    I have offset of 3 columns
                  </Col>
                </Row>
                <Row>
                  <Col md={{ size: 6, offset: 3 }}>
                    {" "}
                    I have offset of 3 columns
                  </Col>
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
    <Col md={{ size: 4, offset: 4 }}>
      I have offset of 4 columns
    </Col>
  </Row>
  <Row>
    <Col md={{ size: 3, offset: 3 }}>
      I have offset of 3 columns
    </Col>
    <Col md={{ size: 3, offset: 3 }}>
      I have offset of 3 columns
    </Col>
  </Row>
  <Row>
    <Col md={{ size: 6, offset: 3 }}>
      I have offset of 3 columns
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
export default OffsetProps
