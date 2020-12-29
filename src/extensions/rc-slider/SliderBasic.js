import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap"
import Tooltip from "rc-tooltip"
import Slider from "rc-slider"

const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)
const Handle = Slider.Handle

const handle = props => {
  const { value, dragging, index, ...restProps } = props
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  )
}

class SliderBasic extends React.Component {
  state = {
    value: 20
  }

  onSliderChange = value => {
    this.setState({ value })
  }

  resetSlider = () => {
    this.setState({ value: null })
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Sliders</CardTitle>
        </CardHeader>
        <CardBody>
          <h5 className="my-1">Default</h5>
          <Slider
            min={0}
            max={20}
            defaultValue={3}
            handle={handle}
            reverse={this.props.rtl === "rtl"}
            tipProps={{
              prefixCls: "rc-slider-tooltip"
            }}
          />

          <h5 className="mt-3">Fixed Values</h5>
          <Slider
            min={20}
            defaultValue={20}
            marks={{ 20: 20, 40: 40, 60: 60, 100: 100 }}
            step={null}
            reverse={this.props.rtl === "rtl"}
          />

          <h5 className="mt-3">Custom Tooltip</h5>
          <Range
            min={0}
            max={20}
            defaultValue={[3, 10]}
            tipFormatter={value => `${value}%`}
            reverse={this.props.rtl === "rtl"}
          />

          <h5 className="mt-3">Disabled Slider</h5>
          <Slider reverse={this.props.rtl === "rtl"} disabled />

          <h5 className="mt-3">Reset Button</h5>
          <Slider
            value={this.state.value}
            onChange={this.onSliderChange}
            onAfterChange={this.onAfterChange}
            reverse={this.props.rtl === "rtl"}
          />
          <Button.Ripple
            color="primary"
            onClick={this.resetSlider}
            className="mt-1"
          >
            Reset
          </Button.Ripple>
        </CardBody>
      </Card>
    )
  }
}

export default SliderBasic
