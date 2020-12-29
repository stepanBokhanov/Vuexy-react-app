import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"
import { MoreVertical } from "react-feather"

class Sales extends React.Component {
  state = {
    options: {
      chart: {
        dropShadow: {
          enabled: true,
          blur: 8,
          left: 1,
          top: 1,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 0
      },
      colors: [this.props.primary, this.props.info],
      plotOptions: {
        radar: {
          polygons: {
            strokeColors: [
              this.props.strokeColor,
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent"
            ],
            connectorColors: "transparent"
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#9f8ed7", this.props.infoLight],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0
      },
      legend: {
        show: false
      },
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      dataLabels: {
        style: {
          colors: [
            this.props.strokeColor,
            this.props.strokeColor,
            this.props.strokeColor,
            this.props.strokeColor,
            this.props.strokeColor,
            this.props.strokeColor
          ]
        }
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false
      }
    },
    series: [
      {
        name: "Sales",
        data: [90, 50, 86, 40, 100, 20]
      },
      {
        name: "Visit",
        data: [70, 75, 70, 76, 20, 85]
      }
    ]
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <div className="title">
            <CardTitle>Sales</CardTitle>
            <p className="text-muted mb-0">Last 6 months</p>
          </div>
          <MoreVertical className="cursor-pointer" size={20} />
        </CardHeader>
        <CardBody>
          <div className="item-info d-inline-block mr-2">
            <div
              className="bg-primary"
              style={{
                height: "10px",
                width: "10px",
                borderRadius: "50%",
                display: "inline-block",
                marginRight: "5px"
              }}
            />
            <span>Sales</span>
          </div>
          <div className="item-info d-inline-block">
            <div
              className="bg-info"
              style={{
                height: "10px",
                width: "10px",
                borderRadius: "50%",
                display: "inline-block",
                marginRight: "5px"
              }}
            />
            <span>Visits</span>
          </div>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="radar"
            height={400}
          />
        </CardBody>
      </Card>
    )
  }
}
export default Sales
