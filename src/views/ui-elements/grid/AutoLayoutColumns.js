import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"

class AutoLayoutColumns extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Auto-layout columns</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Utilize breakpoint-specific column props for easy column sizing
            without an explicit number like{" "}
            <code>&lt;Col sm=&quot;6&quot;&gt;&lt;/Col&gt;</code>.
          </p>
        </CardBody>
      </Card>
    )
  }
}
export default AutoLayoutColumns
