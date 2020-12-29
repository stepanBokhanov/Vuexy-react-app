import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import InputBasic from "./InputBasic"
import InputStyles from "./InputStyles"
import InputFloating from "./InputFloating"
import InputFile from "./InputFile"
import InputState from "./InputStates"
import InputValidation from "./InputValidation"
import InputIcons from "./InputIcons"
import InputFloatingLabelIcons from "./InputFloatingLableIcons"
import InputSizes from "./InputSizes"
import InputFloatingSizes from "./InputFloatingSizes"

class Input extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Input"
          breadCrumbParent="Form Elements"
          breadCrumbActive="Input"
        />
        <Row>
          <Col sm="12">
            <InputBasic />
          </Col>
          <Col sm="12">
            <InputStyles />
          </Col>
          <Col sm="12">
            <InputFloating />
          </Col>
          <Col sm="12">
            <InputFile />
          </Col>
          <Col sm="12">
            <InputState />
          </Col>
          <Col sm="12">
            <InputValidation />
          </Col>
          <Col sm="12">
            <InputIcons />
          </Col>
          <Col sm="12">
            <InputFloatingLabelIcons />
          </Col>
          <Col lg="6" md="12">
            <InputSizes />
          </Col>
          <Col lg="6" md="12">
            <InputFloatingSizes />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Input
