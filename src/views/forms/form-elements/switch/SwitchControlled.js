import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap"
import Toggle from "react-toggle"

class SwitchControlled extends React.Component {
  state = {
    isChecked: false
  }

  handleSwitchChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>React Toggle Controlled</CardTitle>
        </CardHeader>
        <CardBody>
          <label className="react-toggle-wrapper">
            <Toggle
              checked={this.state.isChecked}
              onChange={this.handleSwitchChange}
              name="controlledSwitch"
              value="yes"
            />
            <Button.Ripple
              color="primary"
              onClick={this.handleSwitchChange}
              size="sm"
            >
              {this.state.isChecked ? "True" : "False"}
            </Button.Ripple>
          </label>
        </CardBody>
      </Card>
    )
  }
}
export default SwitchControlled
