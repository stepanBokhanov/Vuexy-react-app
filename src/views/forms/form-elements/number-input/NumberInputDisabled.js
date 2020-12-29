import React from "react"
import NumericInput from "react-numeric-input"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { mobileStyle } from "./InputStyles"

class NumberInputDisabled extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Disabled And ReadOnly</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="d-inline-block mb-1 mr-1">
            <NumericInput value={50} disabled mobile style={mobileStyle} />
          </div>{" "}
          <div className="d-inline-block mb-1">
            <NumericInput value={50} readOnly mobile style={mobileStyle} />
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default NumberInputDisabled
