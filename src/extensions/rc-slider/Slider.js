import React from "react"
import ExtensionsHeader from "../extensionsHeader"
import { Row, Col } from "reactstrap"
import { ContextLayout } from "../../utility/context/Layout"
import SliderBasic from "./SliderBasic"
import SliderMarks from "./SliderMarks"
import SliderRange from "./SliderRange"
import SliderDynamic from "./SliderDynamic"
import SliderVertical from "./SliderVertical"
import "rc-slider/assets/index.css"

import "../../assets/scss/plugins/extensions/slider.scss"
class Slider extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ExtensionsHeader
          title="Rc Slider"
          subTitle="Slider UI component for React"
          link="https://github.com/react-component/slider/"
        />
        <ContextLayout.Consumer>
          {context => (
            <Row>
              <Col sm="12">
                <SliderBasic rtl={context.state.direction} />
              </Col>
              <Col sm="12">
                <SliderMarks rtl={context.state.direction} />
              </Col>
              <Col sm="12">
                <SliderRange rtl={context.state.direction} />
              </Col>
              <Col sm="12">
                <SliderVertical rtl={context.state.direction} />
              </Col>
              <Col sm="12">
                <SliderDynamic rtl={context.state.direction} />
              </Col>
            </Row>
          )}
        </ContextLayout.Consumer>
      </React.Fragment>
    )
  }
}

export default Slider
