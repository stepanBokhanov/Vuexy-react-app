import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"

class ApexDonutCharts extends React.Component {
  state = {
    options: {
      colors: this.props.themeColors,
      legend: {
        itemMargin: {
          horizontal: 2
        }
      },
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
    series: [44, 55, 41, 17]
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Donut Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            height={350}
          />
        </CardBody>
      </Card>
    )
  }
}
export default ApexDonutCharts
