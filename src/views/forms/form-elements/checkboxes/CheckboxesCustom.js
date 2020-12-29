import React from "react"
import { Card, CardHeader, CardTitle, CardBody, CustomInput } from "reactstrap"

class CheckboxCustom extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Custom Checkboxes</CardTitle>
        </CardHeader>
        <CardBody>
          <CustomInput
            inline
            type="checkbox"
            id="exampleCustomCheckbox"
            label="Active"
            defaultChecked
          />
          <CustomInput
            inline
            type="checkbox"
            id="exampleCustomCheckbox2"
            label="Inactive"
          />
          <CustomInput
            inline
            type="checkbox"
            id="exampleCustomCheckbox4"
            label="Active Disabled"
            htmlFor="exampleCustomCheckbox4_X"
            defaultChecked
            disabled
          />
          <CustomInput
            inline
            type="checkbox"
            id="exampleCustomCheckbox5"
            label="Inactive Disabled"
            htmlFor="exampleCustomCheckbox5_X"
            disabled
          />
        </CardBody>
      </Card>
    )
  }
}
export default CheckboxCustom
