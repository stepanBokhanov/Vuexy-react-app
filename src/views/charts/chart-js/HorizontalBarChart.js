import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { HorizontalBar } from "react-chartjs-2"

const $primary = "#7367F0",
  $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $label_color = "#1E1E1E",
  grid_line_color = "#dae1e7"
const themeColors = [$primary, $success, $danger, $warning, $label_color]

const data = {
  labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
  datasets: [
    {
      label: "Population (millions)",
      data: [2478, 5267, 734, 784, 433],
      backgroundColor: themeColors,
      borderColor: "transparent"
    }
  ]
}

const options = {
  elements: {
    rectangle: {
      borderWidth: 2,
      borderSkipped: "right"
    }
  },
  responsive: true,
  responsiveAnimationDuration: 500,
  maintainAspectRatio: false,
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
    text: "Predicted world population (millions) in 2050"
  },
  legend: {
    display: false
  }
}

class HorizontalBarCharts extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Horizontal Bar Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <HorizontalBar data={data} options={options} height={300} />
        </CardBody>
      </Card>
    )
  }
}
export default HorizontalBarCharts
