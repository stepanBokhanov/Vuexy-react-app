import React from "react"
import NumericInput from "react-numeric-input"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { mobileStyle } from "./InputStyles"

class NumberInputFormat extends React.Component {
  myFormat = num => {
    return `${num} $`
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Custom Format</CardTitle>
        </CardHeader>
        <CardBody>
          <NumericInput
            min={0}
            max={100}
            value={50}
            mobile
            format={this.myFormat}
            style={mobileStyle}
          />
        </CardBody>
      </Card>
    )
  }
}
export default NumberInputFormat
