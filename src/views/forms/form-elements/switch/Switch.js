import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import SwitchBasic from "./SwitchBasic"
import SwitchEvent from "./SwitchEvent"
import SwitchControlled from "./SwitchControlled"
import SwitchDisabled from "./SwitchDisabled"
import SwitchCustomClass from "./SwitchCustomClass"
import SwitchCustomIcons from "./SwitchCustomIcons"
import SwitchReactstrap from "./SwitchReactstrap"
import SwitchColors from "./SwitchReactstrapColors"
import SwitchSizes from "./SwitchSizes"

import "react-toggle/style.css"
import "../../../../assets/scss/plugins/forms/switch/react-toggle.scss"

class Switch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Switch"
          breadCrumbParent="Form Elements"
          breadCrumbActive="Switch"
        />
        <Row>
          <Col md="6" sm="12">
            <SwitchReactstrap />
          </Col>
          <Col md="6" sm="12">
            <SwitchSizes />
          </Col>
          <Col sm="12">
            <SwitchColors />
          </Col>
          <Col md="6" sm="12">
            <SwitchBasic />
          </Col>
          <Col md="6" sm="12">
            <SwitchEvent />
          </Col>
          <Col md="6" sm="12">
            <SwitchControlled />
          </Col>
          <Col md="6" sm="12">
            <SwitchDisabled />
          </Col>
          <Col md="6" sm="12">
            <SwitchCustomClass />
          </Col>
          <Col md="6" sm="12">
            <SwitchCustomIcons />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Switch
