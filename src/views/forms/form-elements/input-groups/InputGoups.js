import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import InputGroupBasic from "./InputGroupBasic"
import InputGroupCheckboxAndRadio from "./InputGroupCbAndRadio"
import InputGroupButtons from "./InputGroupButtons"
import InputGroupDropdown from "./InputGroupDropdown"
import InputGroupSizes from "./InputGroupSizes"

class InputGroups extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Input Groups"
          breadCrumbParent="Form Elements"
          breadCrumbActive="InputGroups"
        />
        <Row>
          <Col sm="12">
            <InputGroupBasic />
          </Col>
          <Col sm="12">
            <InputGroupCheckboxAndRadio />
          </Col>
          <Col sm="12">
            <InputGroupButtons />
          </Col>
          <Col sm="12">
            <InputGroupDropdown />
          </Col>
          <Col sm="12">
            <InputGroupSizes />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default InputGroups
