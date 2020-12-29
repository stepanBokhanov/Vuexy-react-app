import React from "react"
import NumericInput from "react-numeric-input"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { mobileStyle, defaultStyle } from "./InputStyles"

class NumberStyle extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Styles</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="d-inline-block mb-1 mr-1">
            <NumericInput
              min={0}
              max={100}
              value={10}
              mobile
              style={mobileStyle}
            />
          </div>
          <div className="d-inline-block mb-1 mr-1">
            <NumericInput className="form-control" min={0} max={100} value={10} style={defaultStyle} />
          </div>
          <div className="d-inline-block mb-1">
            <NumericInput className="form-control" min={0} max={100} value={10} noStyle />
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default NumberStyle
