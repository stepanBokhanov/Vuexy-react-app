import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"

class CheckboxSizes extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use <code>size=[sm/lg]</code> to change size of checkbox.
          </p>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="primary"
              icon={<Check className="vx-icon" size={10} />}
              defaultChecked={true}
              label="Primary"
              size="sm"
            />
          </div>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="primary"
              icon={<Check className="vx-icon" size={16} />}
              defaultChecked={true}
              label="Primary"
            />
          </div>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="primary"
              icon={<Check className="vx-icon" size={20} />}
              defaultChecked={true}
              label="Primary"
              size="lg"
            />
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default CheckboxSizes
