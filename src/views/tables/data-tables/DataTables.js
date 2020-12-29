import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import DataTableBasic from "./DataTableBasic"
import DataTableFixedHeader from "./DataTableFixedHeader"
import DataTablePagination from "./DataTablePagination"
import DataTableSelectable from "./DataTableSelectable"
import DataTableExpandableRows from "./DataTableExpandable"
import DataTableFilter from "./DataTableFilter"
import DataTableCustom from "./DataTableCustom"

class DataTables extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="DataTables"
          breadCrumbParent="Forms & Tables"
          breadCrumbActive="DataTables"
        />
        <Row>
          <Col sm="12">
            <DataTableBasic />
          </Col>
          <Col sm="12">
            <DataTableCustom />
          </Col>
          <Col sm="12">
            <DataTablePagination />
          </Col>
          <Col sm="12">
            <DataTableSelectable />
          </Col>
          <Col sm="12">
            <DataTableExpandableRows />
          </Col>
          <Col sm="12">
            <DataTableFilter />
          </Col>
          <Col sm="12">
            <DataTableFixedHeader />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default DataTables
