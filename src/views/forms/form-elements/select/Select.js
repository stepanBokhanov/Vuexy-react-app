import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import SelectReactstrap from "./SelectReactstrap"
import ReactSelect from "./SelectReact"
import Selectoptions from "./SelectOptions"

import "../../../../assets/scss/plugins/forms/react-select/_react-select.scss"

class Select extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Select"
          breadCrumbParent="Form Elements"
          breadCrumbActive="Select"
        />
        <Row>
          <Col sm="12">
            <ReactSelect />
          </Col>
          <Col sm="12">
            <Selectoptions />
          </Col>
          <Col sm="12">
            <SelectReactstrap />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Select
