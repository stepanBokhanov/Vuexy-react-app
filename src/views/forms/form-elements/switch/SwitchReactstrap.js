import React from "react"
import { Card, CardHeader, CardTitle, CardBody, CustomInput } from "reactstrap"

class ReactstrapSwitch extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Reactstrap Basic Switch</CardTitle>
        </CardHeader>
        <CardBody>
          <CustomInput
            type="switch"
            id="exampleCustomSwitch"
            name="customSwitch"
            inline
          >
            <span className="switch-label">Toggle this switch element</span>
          </CustomInput>
          <CustomInput
            type="switch"
            id="exampleCustomSwitchdisabled"
            name="customSwitchdisabled"
            inline
            disabled
          >
            <span className="switch-label">Disabled switch element</span>
          </CustomInput>
        </CardBody>
      </Card>
    )
  }
}
export default ReactstrapSwitch
