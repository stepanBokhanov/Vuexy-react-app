import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Input,
  Label,
  FormGroup
} from "reactstrap"
import Slider from "rc-slider"

class SliderBasic extends React.Component {
  state = {
    lowerBound: 20,
    upperBound: 40,
    min: 0,
    max: 100,
    value: [20, 100]
  }

  handleApply = () => {
    const { lowerBound, upperBound } = this.state
    this.setState({ value: [lowerBound, upperBound] })
  }

  onLowerBoundChange = e => {
    this.setState({
      lowerBound: +e.target.value,
      value: [+e.target.value, this.state.upperBound]
    })
  }
  onUpperBoundChange = e => {
    this.setState({
      upperBound: +e.target.value,
      value: [this.state.lowerBound, +e.target.value]
    })
  }
  onSliderChange = value => {
    this.setState({
      value
    })
  }

  onMinChange = e => {
    this.setState({
      min: +e.target.value || 0
    })
  }
  onMaxChange = e => {
    this.setState({
      max: +e.target.value || 100
    })
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Dynamic</CardTitle>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label>LowerBound:</Label>
            <Input
              type="number"
              value={this.state.lowerBound}
              onChange={e => this.onLowerBoundChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label>UpperBound:</Label>
            <Input
              type="number"
              value={this.state.upperBound}
              onChange={e => this.onUpperBoundChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Min:</Label>
            <Input
              type="number"
              value={this.state.min}
              onChange={e => this.onMinChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Max:</Label>
            <Input
              type="number"
              value={this.state.max}
              onChange={e => this.onMaxChange(e)}
            />
          </FormGroup>

          <Slider.Range
            value={this.state.value}
            min={this.state.min}
            max={this.state.max}
            onChange={e => this.onSliderChange(this.state.value)}
            reverse={this.props.rtl === "rtl"}
          />
        </CardBody>
      </Card>
    )
  }
}

export default SliderBasic
