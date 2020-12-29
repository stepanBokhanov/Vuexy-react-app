import React from "react"
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Progress
} from "reactstrap"
import Chart from "react-apexcharts"
import { ChevronsRight, ChevronDown } from "react-feather"

class AvgSessions extends React.Component {
  state = {
    options: {
      chart: {
        sparkline: { enabled: true },
        toolbar: { show: false }
      },
      states: {
        hover: {
          filter: "none"
        }
      },
      colors: [
        this.props.labelColor,
        this.props.labelColor,
        this.props.primary,
        this.props.labelColor,
        this.props.labelColor,
        this.props.labelColor
      ],
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          endingShape: "rounded"
        }
      },
      tooltip: {
        x: { show: false }
      },
      xaxis: {
        type: "numeric"
      }
    },
    series: [
      {
        name: "Sessions",
        data: [75, 125, 225, 175, 125, 75, 25]
      }
    ]
  }
  render() {
    return (
      <Card>
        <CardBody>
          <Row className="pb-50">
            <Col
              lg={{ size: 6, order: 1 }}
              sm={{ size: 12, order: 2 }}
              xs={{ order: 2 }}
              className="d-flex justify-content-between flex-column mt-lg-0 mt-2"
            >
              <div className="session-info">
                <h2 className="text-bold-600 mb-25">2.7K</h2>
                <p className="text-bold-500 mb-75">Avg Sessions</p>
                <h5 className="font-medium-2">
                  <span className="text-success">+5.2% </span>
                  <span>vs last 7 days</span>
                </h5>
              </div>
              <Button.Ripple className="btn-block shadow" color="primary">
                View Details <ChevronsRight size={15} />
              </Button.Ripple>
            </Col>
            <Col
              lg={{ size: 6, order: 2 }}
              sm={{ size: 12, order: 1 }}
              xs={{ order: 1 }}
              className="d-flex justify-content-between flex-column text-right"
            >
              <UncontrolledDropdown>
                <DropdownToggle tag="small" className="text-bold-500 cursor-pointer">
                  Last 7 days <ChevronDown size={10} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Last 28 days</DropdownItem>
                  <DropdownItem>Last Month</DropdownItem>
                  <DropdownItem>Last Year</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                height={200}
              />
            </Col>
          </Row>
          <hr />
          <Row className="pt-50">
            <Col md="6" sm="12">
              <p className="mb-0">Goal: $100000</p>
              <Progress className="mt-25" value="50" />
            </Col>
            <Col md="6" sm="12">
              <p className="mb-0">Users: 100K</p>
              <Progress className="mt-25" color="warning" value="60" />
            </Col>
            <Col md="6" sm="12">
              <p className="mb-0">Retention: 90%</p>
              <Progress className="mt-25" color="danger" value="70" />
            </Col>
            <Col md="6" sm="12">
              <p className="mb-0">Duration: 1yr</p>
              <Progress className="mt-25" color="success" value="80" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
export default AvgSessions
