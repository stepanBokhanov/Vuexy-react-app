import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"

class ApexLineCharts extends React.Component {
  state = {
    options: {
      chart: {
        id: "lineChart"
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      },
      stroke: {
        curve: "straight"
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      colors: this.props.themeColors,
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      }
    },
    series: [
      {
        name: "line-series",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ]
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Line Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={350}
          />
        </CardBody>
      </Card>
    )
  }
}
export default ApexLineCharts
