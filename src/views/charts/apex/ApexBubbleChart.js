import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"

const generateDataBubbleChart = (baseval, count, yrange) => {
  var i = 0
  var seriesBubbleChart = []
  while (i < count) {
    // var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15

    seriesBubbleChart.push([baseval, y, z])
    baseval += 86400000
    i++
  }
  return seriesBubbleChart
}

class ApexBubbleCharts extends React.Component {
  state = {
    options: {
      colors: this.props.themeColors,
      dataLabels: {
        enabled: false
      },
      legend: {
        offsetY: -10
      },
      fill: {
        type: "gradient"
      },
      xaxis: {
        tickAmount: 12,
        type: "datetime",

        labels: {
          rotate: 0
        }
      },
      yaxis: {
        max: 70,
        tickAmount: 5
      },
      theme: {
        palette: "palette2"
      }
    },
    series: [
      {
        name: "Product1",
        data: generateDataBubbleChart(
          new Date("11 Feb 2017 GMT").getTime(),
          20,
          {
            min: 10,
            max: 60
          }
        )
      },
      {
        name: "Product2",
        data: generateDataBubbleChart(
          new Date("11 Feb 2017 GMT").getTime(),
          20,
          {
            min: 10,
            max: 60
          }
        )
      },
      {
        name: "Product3",
        data: generateDataBubbleChart(
          new Date("11 Feb 2017 GMT").getTime(),
          20,
          {
            min: 10,
            max: 60
          }
        )
      },
      {
        name: "Product4",
        data: generateDataBubbleChart(
          new Date("11 Feb 2017 GMT").getTime(),
          20,
          {
            min: 10,
            max: 60
          }
        )
      }
    ]
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>3D Bubble Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bubble"
            height={350}
          />
        </CardBody>
      </Card>
    )
  }
}
export default ApexBubbleCharts
