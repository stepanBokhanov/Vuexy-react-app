import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"

class BlockquoteDefault extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            Blockquotes <small className="text-muted">Default</small>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Left aligned basic blockquotes. Use text utilities classes like{" "}
            <code>.text-center / .text-right</code> as needed to change the
            alignment of your blockquote.
          </p>
          <blockquote className="blockquote">
            <p>
              Design is not just what it looks like and feels like. Design is
              how it works.
            </p>
          </blockquote>
        </CardBody>
      </Card>
    )
  }
}
export default BlockquoteDefault
