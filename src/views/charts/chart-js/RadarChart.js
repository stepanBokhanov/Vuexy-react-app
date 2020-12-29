import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { Radar } from "react-chartjs-2"

const data = {
  labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
  datasets: [
    {
      label: "1950",
      fill: true,
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(179,181,198,1)",
      data: [8.77, 55.61, 21.69, 6.62, 6.82]
    },
    {
      label: "2050",
      fill: true,
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(255,99,132,1)",
      data: [25.48, 54.16, 7.61, 8.06, 4.45]
    }
  ]
}

const options = {
  responsive: true,
  responsiveAnimationDuration: 500,
  maintainAspectRatio: false,
  tooltips: {
    callbacks: {
      label: function(tooltipItems, data) {
        return (
          data.datasets[tooltipItems.datasetIndex].label +
          ": " +
          tooltipItems.yLabel
        )
      }
    }
  },
  scale: {
    reverse: false,
    ticks: {
      beginAtZero: true,
      stepSize: 10
    }
  },
  title: {
    display: true,
    text: "Distribution in % of world population"
  }
}

class RadarChart extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Radar Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <Radar data={data} options={options} height={300} />
        </CardBody>
      </Card>
    )
  }
}
export default RadarChart
