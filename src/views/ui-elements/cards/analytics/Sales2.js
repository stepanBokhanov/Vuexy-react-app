import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"
import { Settings } from "react-feather"

class Sales2 extends React.Component {
  state = {
    options: {
      chart: {
        dropShadow: {
          enabled: true,
          top: 20,
          left: 2,
          blur: 6,
          opacity: 0.2
        },
        toolbar: { show: false }
      },
      stroke: {
        curve: "smooth",
        width: 4
      },
      grid: {
        borderColor: this.props.labelColor
      },
      legend: {
        show: false
      },
      colors: [this.props.purple],
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          inverseColors: false,
          gradientToColors: [this.props.primary],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      xaxis: {
        labels: {
          style: {
            colors: this.props.strokeColor
          }
        },
        axisTicks: {
          show: false
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        axisBorder: {
          show: false
        },
        tickPlacement: "on"
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            color: this.props.strokeColor
          },
          formatter: val => {
            return val > 999 ? (val / 1000).toFixed(1) + "k" : val
          }
        }
      },
      tooltip: {
        x: { show: false }
      }
    },
    series: [
      {
        name: "Sales",
        data: [140, 180, 150, 205, 160, 295, 125, 255, 205, 305, 240, 295]
      }
    ]
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <div className="title">
            <CardTitle>Sales</CardTitle>
          </div>
          <Settings className="text-muted cursor-pointer" size={20} />
        </CardHeader>
        <CardBody>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={270}
          />
        </CardBody>
      </Card>
    )
  }
}
export default Sales2
