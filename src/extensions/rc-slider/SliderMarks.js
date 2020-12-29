import React from "react"
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap"
import Slider from "rc-slider"

const marks = {
  "-10": "-10°C",
  0: <strong>0°C</strong>,
  26: "26°C",
  37: "37°C",
  50: "50°C",
  100: {
    style: {
      color: "red"
    },
    label: <strong>100°C</strong>
  }
}

class SliderMarks extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Marks</CardTitle>
        </CardHeader>
        <CardBody>
          <Slider
            min={-10}
            marks={marks}
            step={null}
            defaultValue={20}
            className="pb-2"
            reverse={this.props.rtl === "rtl"}
          />
        </CardBody>
      </Card>
    )
  }
}

export default SliderMarks
