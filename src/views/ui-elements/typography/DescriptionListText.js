import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap"

class DescriptionListtext extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            Description lists{" "}
            <small className="text-muted">Text Alignment</small>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Description lists with right aligned text in <code>&ltdt&gt</code>{" "}
            tag using <code>.text-right</code> class.
          </p>
          <dl>
            <Row>
              <Col sm="3" className="text-right">
                <dt>Description lists</dt>
              </Col>
              <Col sm="9">
                <dd>A description list is perfect for defining terms.</dd>
              </Col>
            </Row>
          </dl>
          <dl>
            <Row>
              <Col sm="3" className="text-right">
                <dt>Euismod</dt>
              </Col>
              <Col sm="9">
                <dd>
                  Vestibulum id ligula porta felis euismod semper eget lacinia
                  odio sem nec elit.
                </dd>
              </Col>
            </Row>
          </dl>
          <dl>
            <Row>
              <Col sm="3" className="text-right">
                <dt>Malesuada porta</dt>
              </Col>
              <Col sm="9">
                <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
              </Col>
            </Row>
          </dl>
          <dl>
            <Row>
              <Col sm="3" className="text-right">
                <dt>Truncated term is truncated</dt>
              </Col>
              <Col sm="9">
                <dd>
                  Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
                  nunc
                </dd>
              </Col>
            </Row>
          </dl>
        </CardBody>
      </Card>
    )
  }
}
export default DescriptionListtext
