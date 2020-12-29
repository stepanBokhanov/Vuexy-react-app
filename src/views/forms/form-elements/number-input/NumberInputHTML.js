import React from "react"
import NumericInput from "react-numeric-input"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { mobileStyle } from "./InputStyles"

class NumberInputHTML extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>HTML Props</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            You can use any additional HTML attributes that make sence, just
            don't forget to camelCase them as JSX requires. Only the type
            attribute will be overriden to text. Following input will be auto
            focused.
          </p>
          <NumericInput
            mobile
            autoComplete="on"
            autoCorrect="on"
            autoFocus={true}
            value={10}
            style={mobileStyle}
          />
        </CardBody>
      </Card>
    )
  }
}
export default NumberInputHTML
