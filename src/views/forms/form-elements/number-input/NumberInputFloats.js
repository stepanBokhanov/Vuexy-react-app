import React from "react"
import NumericInput from "react-numeric-input"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { mobileStyle } from "./InputStyles"

class NumberInputFloats extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Floats</CardTitle>
        </CardHeader>
        <CardBody>
          <NumericInput
            min={0}
            max={100}
            value={50}
            step={0.1}
            precision={2}
            mobile
            style={mobileStyle}
          />
        </CardBody>
      </Card>
    )
  }
}
export default NumberInputFloats
