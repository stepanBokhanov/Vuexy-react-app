import React from "react"
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap"
import Slider from "rc-slider"

const Range = Slider.Range

class SliderRange extends React.Component {
  state = {
    value: [20, 40, 60, 80]
  }

  handleControlledRange = value => {
    this.setState({ value })
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Range</CardTitle>
        </CardHeader>
        <CardBody>
          <h5 className="my-2">Basic Range</h5>
          <Range defaultValue={[0, 20]} reverse={this.props.rtl === "rtl"} />

          <h5 className="my-2">Range With Steps</h5>
          <Range
            defaultValue={[0, 20]}
            step={20}
            reverse={this.props.rtl === "rtl"}
          />

          <h5 className="my-2">Range With Steps And Dots</h5>
          <Range
            defaultValue={[0, 40]}
            step={20}
            dots
            reverse={this.props.rtl === "rtl"}
          />

          <h5 className="my-2">Disabled Range</h5>
          <Range
            defaultValue={[0, 40]}
            disabled
            reverse={this.props.rtl === "rtl"}
          />

          <h5 className="my-2">Multi Range</h5>
          <Range
            count={3}
            defaultValue={[20, 40, 60, 80]}
            reverse={this.props.rtl === "rtl"}
          />

          <h5 className="my-2">Multi Range With Track Colors</h5>
          <Range
            count={3}
            defaultValue={[20, 40, 60, 80]}
            pushable
            trackStyle={[
              { backgroundColor: "#7367F0" },
              { backgroundColor: "#28C76F" },
              { backgroundColor: "#EA5455" }
            ]}
            handleStyle={[
              { backgroundColor: "#7367F0" },
              { backgroundColor: "#28C76F" },
              { backgroundColor: "#EA5455" }
            ]}
            railStyle={{ backgroundColor: "#f0f0f0" }}
            reverse={this.props.rtl === "rtl"}
          />

          <h5 className="my-2">Controlled Range</h5>
          <Range
            value={this.state.value}
            onChange={this.handleControlledRange}
          />
        </CardBody>
      </Card>
    )
  }
}

export default SliderRange
