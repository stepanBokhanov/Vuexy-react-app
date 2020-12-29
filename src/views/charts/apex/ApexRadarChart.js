import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"

class ApexRadialCharts extends React.Component {
  state = {
    options: {
      colors: this.props.themeColors,
      labels: ["January", "February", "March", "April", "May", "June"],
      dataLabels: {
        style: {
          color: this.props.labelColor
        }
      }
    },
    series: [
      {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20]
      }
    ]
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Radial Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="radar"
            height={350}
          />
        </CardBody>
      </Card>
    )
  }
}
export default ApexRadialCharts
