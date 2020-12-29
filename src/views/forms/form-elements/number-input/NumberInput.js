import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import NumberInputBasic from "./NumberInputBasic"
import NumberInputDisabled from "./NumberInputDisabled"
import NumberInputFloats from "./NumberInputFloats"
import NumberInputCustomFormat from "./NumberInputFormat"
import NumberInputHTML from "./NumberInputHTML"
import NumberInputStyles from "./NumberInputStyles"

class NumberInput extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Number Input"
          breadCrumbParent="Form Elements"
          breadCrumbActive="Number Input"
        />
        <Row>
          <Col md="6" sm="12">
            <NumberInputBasic />
          </Col>
          <Col md="6" sm="12">
            <NumberInputDisabled />
          </Col>
          <Col md="6" sm="12">
            <NumberInputFloats />
          </Col>
          <Col md="6" sm="12">
            <NumberInputCustomFormat />
          </Col>
          <Col md="6" sm="12">
            <NumberInputHTML />
          </Col>
          <Col md="6" sm="12">
            <NumberInputStyles />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default NumberInput
