import React from "react"
import { Card, CardHeader, CardTitle, CardBody, CustomInput } from "reactstrap"

class SwitchColors extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Reactstrap Switch Colors</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="d-flex justify-content-start flex-wrap mt-1">
            <CustomInput
              type="switch"
              className="mr-1 mb-2"
              id="primary"
              name="primary"
              inline
            >
              <span className="mb-0 switch-label">Primary</span>
            </CustomInput>
            <CustomInput
              className="custom-switch-success mr-1 mb-2"
              type="switch"
              id="success"
              name="success"
              inline
            >
              <span className="mb-0 switch-label">Success</span>
            </CustomInput>
            <CustomInput
              className="custom-switch-danger mr-1 mb-2"
              type="switch"
              id="danger"
              name="danger"
              inline
            >
              <span className="mb-0 switch-label">Danger</span>
            </CustomInput>
            <CustomInput
              className="custom-switch-info mr-1 mb-2"
              type="switch"
              id="info"
              name="info"
              inline
            >
              <span className="mb-0 switch-label">Info</span>
            </CustomInput>
            <CustomInput
              className="custom-switch-warning mr-1 mb-2"
              type="switch"
              id="warning"
              name="warning"
              inline
            >
              <span className="mb-0 switch-label">Warning</span>
            </CustomInput>
            <CustomInput
              className="custom-switch-dark mr-1 mb-2"
              type="switch"
              id="dark"
              name="dark"
              inline
            >
              <span className="mb-0 switch-label">Dark</span>
            </CustomInput>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default SwitchColors
