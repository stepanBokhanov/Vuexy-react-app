import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Toggle from "react-toggle"
import { Volume2, VolumeX } from "react-feather"

class SwitchIcons extends React.Component {
  state = {
    isChecked: false
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>React Toggle Icons</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="d-inline-block mr-1">
            <label className="react-toggle-wrapper">
              <Toggle
                defaultChecked={this.state.isChecked}
                icons={{
                  checked: (
                    <Volume2
                      size={13}
                      style={{ position: "absolute", top: "-2px" }}
                    />
                  ),
                  unchecked: (
                    <VolumeX
                      size={13}
                      style={{ position: "absolute", top: "-2px" }}
                    />
                  )
                }}
              />
              <span className="label-text">Custom Icons</span>
            </label>
          </div>
          <div className="d-inline-block">
            <label className="react-toggle-wrapper">
              <Toggle defaultChecked={this.state.isChecked} icons={false} />
              <span className="label-text">No Icons</span>
            </label>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default SwitchIcons
