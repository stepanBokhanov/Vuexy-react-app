import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"

const generateData = (count, yrange) => {
  var i = 0,
    series = []
  while (i < count) {
    var x = "w" + (i + 1).toString(),
      y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push({
      x: x,
      y: y
    })
    i++
  }
  return series
}

class ApexHeatmapCharts extends React.Component {
  state = {
    options: {
      dataLabels: {
        enabled: false
      },
      colors: this.props.primary
    },
    series: [
      {
        name: "Metric1",
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric2",
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric3",
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric4",
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric5",
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric6",
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric7",
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric8",
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: "Metric9",
        data: generateData(18, {
          min: 0,
          max: 90
        })
      }
    ]
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Heat Map Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="heatmap"
            height={350}
          />
        </CardBody>
      </Card>
    )
  }
}
export default ApexHeatmapCharts
