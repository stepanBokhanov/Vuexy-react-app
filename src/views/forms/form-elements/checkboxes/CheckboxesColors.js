import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"

class CheckboxColors extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Colors</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            To change the color of the checkBox use
            <code>color=[primary/success/danger/info/warning]</code> prop.
          </p>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="primary"
              icon={<Check className="vx-icon" size={16} />}
              label="Primary"
            />
          </div>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="success"
              icon={<Check className="vx-icon" size={16} />}
              label="Success"
            />
          </div>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="danger"
              icon={<Check className="vx-icon" size={16} />}
              label="Danger"
            />
          </div>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="info"
              icon={<Check className="vx-icon" size={16} />}
              label="Info"
            />
          </div>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="warning"
              icon={<Check className="vx-icon" size={16} />}
              label="Warning"
            />
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default CheckboxColors
