import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Toggle from "react-toggle"

class SwitchCustomClass extends React.Component {
  state = {
    isChecked: false
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>React Toggle Custom Class</CardTitle>
        </CardHeader>
        <CardBody>
          <label className="react-toggle-wrapper w-25">
            <Toggle
              defaultChecked={this.state.isChecked}
              className="switch-danger"
            />
            <span className="label-text">Adjecent Label</span>
          </label>
        </CardBody>
      </Card>
    )
  }
}
export default SwitchCustomClass
