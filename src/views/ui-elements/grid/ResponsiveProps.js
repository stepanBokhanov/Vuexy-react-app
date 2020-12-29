import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"

class ResponsiveProps extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Responsive classes</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Reactstrap’s grid includes five tiers of predefined props for
            building complex responsive layouts. Customize the size of your
            columns on extra small, small, medium, large, or extra large devices
            however you see fit.
          </p>
        </CardBody>
      </Card>
    )
  }
}
export default ResponsiveProps
