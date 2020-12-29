import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Toggle from "react-toggle"

class SwitchBasic extends React.Component {
  state = {
    isChecked: false
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>React Toggle Basic</CardTitle>
        </CardHeader>
        <CardBody>
          <label className="react-toggle-wrapper d-inline-block align-middle">
            <Toggle defaultChecked={this.state.isChecked} />
          </label>
          <span className="label-text align-middle">Adjecent Label Text</span>
        </CardBody>
      </Card>
    )
  }
}
export default SwitchBasic
