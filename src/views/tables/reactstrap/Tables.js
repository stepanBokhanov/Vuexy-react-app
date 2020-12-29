import React from "react"
import { Row, Col } from "reactstrap"
import prism from "prismjs"
import TableBasic from "./TableBasic"
import TableInverse from "./TableInverse"
import TableHeadOption from "./TableHead"
import TableHoverAnimation from "./TableHoverAnimation"
import TableStriped from "./TableStriped"
import TableStripedDark from "./TableStripedDark"
import TableBordered from "./TableBordered"
import TableBorderless from "./TableBorderless"
import TableHover from "./TableHover"
import TableContextual from "./TableContextual"
import TableResponsive from "./TableResponsive"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import "prismjs/components/prism-jsx.min"

class Tables extends React.Component {
  
  componentDidMount() {
    prism.highlightAll()
  }
  

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Reactstrap Tables"
          breadCrumbParent="Forms & Tables"
          breadCrumbActive="Tables"
        />
        <Row>
          <Col sm="12">
            <TableBasic />
          </Col>
          <Col sm="12">
            <TableInverse />
          </Col>
          <Col sm="12">
            <TableHeadOption />
          </Col>
          <Col sm="12">
            <TableHoverAnimation />
          </Col>
          <Col sm="12">
            <TableStriped />
          </Col>
          <Col sm="12">
            <TableStripedDark />
          </Col>
          <Col sm="12">
            <TableBordered />
          </Col>
          <Col sm="12">
            <TableBorderless />
          </Col>
          <Col sm="12">
            <TableHover />
          </Col>
          <Col sm="12">
            <TableContextual />
          </Col>
          <Col sm="12">
            <TableResponsive />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Tables
