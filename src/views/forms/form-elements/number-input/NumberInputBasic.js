import React from "react"
import NumericInput from "react-numeric-input"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { mobileStyle } from "./InputStyles"

class NumberInputBasic extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardBody>
          <NumericInput
            min={0}
            max={100}
            value={0}
            mobile
            style={mobileStyle}
          />
        </CardBody>
      </Card>
    )
  }
}
export default NumberInputBasic
