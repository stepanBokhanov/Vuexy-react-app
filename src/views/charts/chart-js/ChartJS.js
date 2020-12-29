import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import LineChart from "./lineChart"
import BarChart from "./BarChart"
import HorizontalBarChart from "./HorizontalBarChart"
import PieChart from "./PieChart"
import DoughnutChart from "./DoughnutChart"
import RadarChart from "./RadarChart"
import PolarChart from "./PolarChart"
import BubbleChart from "./BubbleChart"
import ScatterChart from "./ScatterChart"

class ChartJS extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="React ChartJS 2"
          breadCrumbParent="Charts"
          breadCrumbActive="ChartJS"
        />
        <Row>
          <Col sm="12">
            <p>
              React wrapper for Chart.js. Click{" "}
              <a
                href="https://github.com/jerairrest/react-chartjs-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              for github repo.
            </p>
          </Col>
          <Col lg="6" sm="12">
            <LineChart />
          </Col>
          <Col lg="6" sm="12">
            <BarChart />
          </Col>
          <Col lg="6" sm="12">
            <HorizontalBarChart />
          </Col>
          <Col lg="6" sm="12">
            <PieChart />
          </Col>
          <Col lg="6" sm="12">
            <DoughnutChart />
          </Col>
          <Col lg="6" sm="12">
            <RadarChart />
          </Col>
          <Col lg="6" sm="12">
            <PolarChart />
          </Col>
          <Col lg="6" sm="12">
            <BubbleChart />
          </Col>
          <Col sm="12">
            <ScatterChart />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default ChartJS
