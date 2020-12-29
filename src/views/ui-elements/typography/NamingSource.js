import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"

class NamingSource extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Naming a source</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Add a{" "}
            <code className="highlighter-rouge">
              &ltfooter className="blockquote-footer"&gt
            </code>{" "}
            for identifying the source. Wrap the name of the source work in{" "}
            <code className="highlighter-rouge">&ltcite&gt</code>.
          </p>
          <blockquote className="blockquote mb-0">
            <p className="mb-0">
              I don’t want to go to heaven none of my friends are there.
            </p>
            <footer className="blockquote-footer">
              Oscar Wilde {""}
              <cite title="Source Title">Poet</cite>
            </footer>
          </blockquote>
        </CardBody>
      </Card>
    )
  }
}
export default NamingSource
