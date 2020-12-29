import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap"
// eslint-disable-next-line
import prism from "prismjs"

class NoGutters extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Gutter</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            The gutters between columns in our predefined grid classes can be
            removed with <code>.no-gutters</code>. This removes the negative
            margins from
            <code>.row</code> and the horizontal padding from all immediate
            children columns.
          </p>
          <p>
            Here’s the source code for creating these styles. Note that column
            overrides are scoped to only the first children columns and are
            targeted via{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"
              target="_blank"
              rel="noopener noreferrer"
            >
              attribute selector
            </a>{" "}
            . While this generates a more specific selector, column padding can
            still be further customized with{" "}
            <a
              href="https://getbootstrap.com/docs/4.3/utilities/spacing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              spacing utilities
            </a>
            .
          </p>
          <p>
            <strong>Need an edge-to-edge Design?</strong>
            Drop the parent <code>.container</code> or{" "}
            <code>.container-fluid</code>.
          </p>
          <pre className="mt-2">
            <code className="language-css">
              {`
.no-gutters {
  margin-right: 0
  margin-left: 0

  > .col,
  > [class*="col-"] {
    padding-right: 0
    padding-left: 0
  }
}
              `}
            </code>
          </pre>
          <p className="mt-50">
            In practice, here’s how it looks. Note you can continue to use this
            with all other predefined grid props (including responsive tiers,
            reorders, and more).
          </p>
          <div className="bd-example-row mt-1">
            <div className="bd-example">
              <Row>
                <Col sm="12" md="8">
                  sm="12" md="8"
                </Col>
                <Col sm="12" md="4">
                  sm="12" md="8"
                </Col>
              </Row>
            </div>
          </div>
          <pre className="mt-2">
            <code className="language-markup">
              {`
<Row>
  <Col sm="12" md="8">
    sm="12" md="8"
  </Col>
  <Col sm="12" md="4">
    sm="12" md="8"
  </Col>
</Row>
              `}
            </code>
          </pre>
        </CardBody>
      </Card>
    )
  }
}
export default NoGutters
