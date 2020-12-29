import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"

class CheckboxVuexy extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Vuexy Checkboxes</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use Vuexy checkbox component and pass in icon, label, checked,
            disabled and class as <code>props</code> to create a Vuexy Checkbox.
          </p>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="primary"
              icon={<Check className="vx-icon" size={16} />}
              label="Active"
              defaultChecked={true}
            />
          </div>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="primary"
              icon={<Check className="vx-icon" size={16} />}
              label="Inactive"
              defaultChecked={false}
            />
          </div>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="primary"
              icon={<Check className="vx-icon" size={16} />}
              label="Active - disabled"
              defaultChecked={true}
              disabled={true}
            />
          </div>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="primary"
              icon={<Check className="vx-icon" size={16} />}
              label="Inactive - disabled"
              defaultChecked={false}
              disabled={true}
            />
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default CheckboxVuexy
