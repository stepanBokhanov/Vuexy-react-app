import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import BasicCheckboxes from "./CheckboxesBasic"
import CustomCheckboxes from "./CheckboxesCustom"
import VuexyCheckboxes from "./CheckboxVuexy"
import CheckboxesColors from "./CheckboxesColors"
import CheckboxesIcon from "./CheckboxesIcon"
import CheckboxesSizes from "./CheckboxesSizes"

class Checkbox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Checkbox"
          breadCrumbParent="Form Elements"
          breadCrumbActive="Checkbox"
        />
        <Row>
          <Col lg="6" md="12">
            <BasicCheckboxes />
          </Col>
          <Col lg="6" md="12">
            <CustomCheckboxes />
          </Col>
          <Col lg="6" sm="12">
            <VuexyCheckboxes />
          </Col>
          <Col lg="6" sm="12">
            <CheckboxesColors />
          </Col>
          <Col lg="6" sm="12">
            <CheckboxesIcon />
          </Col>
          <Col lg="6" sm="12">
            <CheckboxesSizes />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Checkbox
