import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import DefaultColors from "./DefaultColors"
import GradientColors from "./GradientColors"

import "../../../assets/scss/pages/colors.scss"

class Colors extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Colors"
          breadCrumbParent="Content"
          breadCrumbActive="Colors"
        />
        <Row>
          <Col sm="12">
            <DefaultColors />
          </Col>
          <Col sm="12">
            <GradientColors />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Colors
