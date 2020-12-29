import React from "react"
import { Card, CardHeader, CardTitle, CardBody, CustomInput } from "reactstrap"

class RadioCustom extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Custom</CardTitle>
        </CardHeader>
        <CardBody>
          <CustomInput
            type="radio"
            id="exampleCustomRadio"
            name="customRadio"
            inline
            label="Active"
            defaultChecked
          />
          <CustomInput
            type="radio"
            id="exampleCustomRadio2"
            name="customRadio"
            inline
            label="Inactive"
          />
          <CustomInput
            type="radio"
            id="exampleCustomRadio3"
            inline
            label="Active Disabled"
            disabled
            defaultChecked
          />
          <CustomInput
            type="radio"
            id="exampleCustomRadio4"
            inline
            label="Inactive disabled"
            htmlFor="exampleCustomRadio4_X"
            disabled
          />
        </CardBody>
      </Card>
    )
  }
}
export default RadioCustom
