import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { Line } from "react-chartjs-2"

const $primary = "#7367F0",
  $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $label_color = "#1E1E1E",
  grid_line_color = "#dae1e7"

const data = {
  labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
  datasets: [
    {
      label: "Africa",
      data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
      borderColor: $primary
    },
    {
      data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
      label: "Asia",
      borderColor: $success
    },
    {
      data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
      label: "Europe",
      borderColor: $danger
    },
    {
      data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
      label: "Latin America",
      borderColor: $warning
    },
    {
      data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
      label: "North America",
      borderColor: $label_color
    }
  ]
}

const options = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    position: "top"
  },

  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          color: grid_line_color
        },
        scaleLabel: {
          display: true
        }
      }
    ],
    yAxes: [
      {
        display: true,
        gridLines: {
          color: grid_line_color
        },
        scaleLabel: {
          display: true
        }
      }
    ]
  },
  title: {
    display: true,
    text: "World population per region (in millions)"
  }
}

class LineCharts extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Line Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <Line data={data} options={options} height={300} />
        </CardBody>
      </Card>
    )
  }
}
export default LineCharts
