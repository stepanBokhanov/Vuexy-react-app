import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import SimpleAreaChart from "./SimpleAreaChart"
import ComposedCharts from "./ComposedChart"
import SimpleBarChart from "./SimpleBarChart"
import SimpleLineChart from "./SimpleLineChart"
import SimpleScatterChart from "./SimpleScatterChart"
import Piechart from "./PieChart"
import RadarChart from "./RadarChart"
import RadialBar from "./RadialBarChart"
import "../../../assets/scss/plugins/extensions/recharts.scss"

let $primary = "#7367F0",
  $success = "#28C76F",
  $info = "#00cfe8",
  $warning = "#FF9F43",
  $danger = "#EA5455",
  colors = [$primary, $success, $info, $warning, $danger]

class DevExtremeCharts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Recharts"
          breadCrumbParent="Charts"
          breadCrumbActive="Recharts"
        />
        <Row>
          <Col sm="12">
            <p>
              React Chart component with bootstrap and material ui. Click{" "}
              <a
                href="https://github.com/DevExpress/devextreme-reactive"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              for github repo.
            </p>
          </Col>
          <Col lg="6" md="12">
            <SimpleLineChart primary={$primary} success={$success} />
          </Col>
          <Col lg="6" md="12">
            <SimpleAreaChart
              primary={$primary}
              danger={$danger}
              success={$success}
            />
          </Col>
          <Col lg="6" md="12">
            <SimpleBarChart primary={$primary} success={$success} />
          </Col>
          <Col lg="6" md="12">
            <ComposedCharts
              primary={$primary}
              success={$success}
              danger={$danger}
            />
          </Col>
          <Col lg="6" md="12">
            <SimpleScatterChart />
          </Col>
          <Col lg="6" md="12">
            <Piechart colors={colors} />
          </Col>
          <Col lg="6" md="12">
            <RadarChart primary={$primary} />
          </Col>
          <Col lg="6" md="12">
            <RadialBar
              primary={$primary}
              success={$success}
              danger={$danger}
              info={$info}
              warning={$warning}
            />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default DevExtremeCharts
