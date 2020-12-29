import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"

class ApexPieCharts extends React.Component {
  state = {
    options: {
      colors: this.props.themeColors,
      labels: ["Team A", "Team B", "Team C", "Team D"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    },
    series: [44, 55, 13, 43]
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Pie Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="pie"
            height={350}
          />
        </CardBody>
      </Card>
    )
  }
}
export default ApexPieCharts
