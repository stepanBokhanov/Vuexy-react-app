import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import Datepickers from "./Datepickers"
import Timepickers from "./Timepicker"

import "flatpickr/dist/themes/light.css";
import "../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"

class Pickers extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Date & Time Picker"
          breadCrumbParent="Form Elements"
          breadCrumbActive="Date & Time Picker"
        />
        <Row>
          <Col sm="12">
            <Datepickers />
          </Col>
          <Col sm="12">
            <Timepickers />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Pickers
