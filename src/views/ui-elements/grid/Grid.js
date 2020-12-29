import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import Prism from "prismjs"
import GridOptions from "./GridOptions"
import AutoLayoutColumns from "./AutoLayoutColumns"
import EqualWidth from "./EqualWidth"
import VariableWidthContent from "./VariableWidthContent"
import ResponsiveProps from "./ResponsiveProps"
import StackedHorizontally from "./StackedHorizontally"
import VerticalAlignment from "./VerticalAlignment"
import HorizontalAlignment from "./HorizontalAlignment"
import NoGutters from "./NoGutters"
import ColumnBreak from "./ColumnBreak"
import OrderProps from "./OrderProps"
import OffsetProps from "./OffsetProps"
import MarginUtilities from "./MarginUtilities"

class Grid extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Content Grid"
          breadCrumbParent="Content"
          breadCrumbActive="Grid"
        />
        <Row>
          <Col sm="12">
            <GridOptions />
          </Col>
          <Col sm="12">
            <AutoLayoutColumns />
          </Col>
          <Col sm="12">
            <EqualWidth />
          </Col>
          <Col sm="12">
            <VariableWidthContent />
          </Col>
          <Col sm="12">
            <ResponsiveProps />
          </Col>
          <Col sm="12">
            <StackedHorizontally />
          </Col>
          <Col sm="12">
            <VerticalAlignment />
          </Col>
          <Col sm="12">
            <HorizontalAlignment />
          </Col>
          <Col sm="12">
            <NoGutters />
          </Col>
          <Col sm="12">
            <ColumnBreak />
          </Col>
          <Col sm="12">
            <OrderProps />
          </Col>
          <Col sm="12">
            <OffsetProps />
          </Col>
          <Col sm="12">
            <MarginUtilities />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Grid
