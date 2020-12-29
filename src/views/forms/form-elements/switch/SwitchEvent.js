import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Toggle from "react-toggle"

class SwitchEvent extends React.Component {
  state = {
    isChecked: false
  }

  handleSwitchChange = () => {
    alert("Switched!")
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>React Toggle Event</CardTitle>
        </CardHeader>
        <CardBody>
          <label className="react-toggle-wrapper">
            <Toggle
              defaultChecked={this.state.isChecked}
              onChange={this.handleSwitchChange}
            />
          </label>
        </CardBody>
      </Card>
    )
  }
}
export default SwitchEvent
