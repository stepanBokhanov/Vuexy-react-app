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

class OrderClasses extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Order Props</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use <code>order</code> prop for controlling the visual order of your
            content. These props are responsive, so you can set the order by
            breakpoint. Includes support for 1 through 12 across all five grid
            tiers.
          </p>
          <div className="bd-example-row">
            <div className="bd-example">
              <Container>
                <Row>
                  <Col>First, but unordered</Col>
                  <Col sm={{ size: "auto", order: 12 }}>
                    Second, but last ordred
                  </Col>
                  <Col sm={{ size: "auto", order: "1" }}>
                    Third, but first ordered
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <pre className="mt-2">
            <code className="language-markup">
              {`
<Container>
  <Row>
    <Col>First, but unordered</Col>
    <Col sm={{ size: "auto", order: 12 }}>
      Second, but last ordred
    </Col>
    <Col sm={{ size: "auto", order: 1 }}>
      Third, but first ordered
    </Col>
  </Row>
</Container>
              `}
            </code>
          </pre>
          <p className="my-1">
            There’s also a responsive <code>order="first"</code> prop that
            quickly changes the order of one element by applying order: -1.
          </p>
          <div className="bd-example-row">
            <div className="bd-example">
              <Container>
                <Row>
                  <Col>First, but unordered</Col>
                  <Col>Second, but unordered</Col>
                  <Col sm={{ size: "auto", order: "first" }}>
                    Third, but first ordered
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <pre className="mt-2">
            <code className="language-markup">
              {`
<Container>
  <Row>
    <Col>First, but unordered</Col>
    <Col>Second, but unordered</Col>
    <Col sm={{ size: "auto", order: "first" }}>
      Third, but first ordered
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
export default OrderClasses
