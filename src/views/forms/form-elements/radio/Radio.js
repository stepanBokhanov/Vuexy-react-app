import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import RadioBasic from "./RadioBasic"
import RadioCustom from "./RadioCustom"
import RadioVuexy from "./RadioVuexy"
import RadioColors from "./RadioColors"
import RadioSizes from "./RadioSizes"

class Radio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Radio"
          breadCrumbParent="Form Elements"
          breadCrumbActive="Radio"
        />
        <Row>
          <Col lg="6" md="12">
            <RadioBasic />
          </Col>
          <Col lg="6" md="12">
            <RadioCustom />
          </Col>
          <Col lg="6" md="12">
            <RadioVuexy />
          </Col>
          <Col lg="6" md="12">
            <RadioColors />
          </Col>
          <Col sm="12">
            <RadioSizes />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Radio
