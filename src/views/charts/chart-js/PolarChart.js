import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { Polar } from "react-chartjs-2"

const $primary = "#7367F0",
  $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $label_color = "#1E1E1E"
const themeColors = [$primary, $success, $danger, $warning, $label_color]

const data = {
  labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
  datasets: [
    {
      label: "Population (millions)",
      backgroundColor: themeColors,
      data: [2478, 5267, 734, 784, 433]
    }
  ]
}

const options = {
  responsive: true,
  responsiveAnimationDuration: 500,
  maintainAspectRatio: false,
  title: {
    display: true,
    text: "Predicted world population (millions) in 2050"
  },
  legend: {
    position: "top"
  },
  scale: {
    ticks: {
      beginAtZero: true,
      stepSize: 2000
    },
    reverse: false
  },
  animation: {
    animateRotate: false
  }
}

class PolarChart extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Polar Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <Polar data={data} options={options} height={300} />
        </CardBody>
      </Card>
    )
  }
}
export default PolarChart
