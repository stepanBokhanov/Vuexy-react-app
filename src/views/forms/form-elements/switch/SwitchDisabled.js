import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Toggle from "react-toggle"

class SwitchDisabled extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>React Toggle Disabled</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="d-inline-block mr-1">
            <label className="react-toggle-wrapper">
              <Toggle defaultChecked={false} disabled={true} />
              <span className="label-text">Diabled, Unchecked</span>
            </label>
          </div>
          <div className="d-inline-block">
            <label className="react-toggle-wrapper">
              <Toggle defaultChecked={true} disabled={true} />
              <span className="label-text">Diabled, Checked</span>
            </label>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default SwitchDisabled
