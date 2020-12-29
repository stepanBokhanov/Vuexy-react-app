import React from "react"
import { Card, CardHeader, CardTitle, CardBody, CustomInput } from "reactstrap"

class SwitchSizes extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Reactstrap Basic Switch</CardTitle>
        </CardHeader>
        <CardBody>
          <CustomInput type="switch" id="default" name="default" inline>
            <span className="switch-label">Default</span>
          </CustomInput>
          <CustomInput
            type="switch"
            id="medium"
            name="medium"
            inline
            className="switch-md"
          >
            <span className="switch-label">medium</span>
          </CustomInput>
          <CustomInput
            type="switch"
            id="large"
            name="large"
            inline
            className="switch-lg"
          >
            <span className="switch-label">large</span>
          </CustomInput>
        </CardBody>
      </Card>
    )
  }
}
export default SwitchSizes
