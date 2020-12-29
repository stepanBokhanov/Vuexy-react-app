import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { Scatter } from "react-chartjs-2"

const scatter_grid_color = "#f3f3f3",
  $scatter_point_light = "#D1D4DB",
  $scatter_point_dark = "#5175E0"

const data = {
  datasets: [
    {
      label: "My First dataset",
      data: [
        {
          x: 65,
          y: 28
        },
        {
          x: 59,
          y: 48
        },
        {
          x: 80,
          y: 40
        },
        {
          x: 81,
          y: 19
        },
        {
          x: 56,
          y: 86
        },
        {
          x: 55,
          y: 27
        },
        {
          x: 40,
          y: 89
        }
      ],
      backgroundColor: "rgba(209,212,219,.3)",
      borderColor: "transparent",
      pointBorderColor: $scatter_point_light,
      pointBackgroundColor: "#fff",
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4
    },
    {
      label: "My Second dataset",
      data: [
        {
          x: 45,
          y: 17
        },
        {
          x: 25,
          y: 62
        },
        {
          x: 16,
          y: 78
        },
        {
          x: 36,
          y: 88
        },
        {
          x: 67,
          y: 26
        },
        {
          x: 18,
          y: 48
        },
        {
          x: 76,
          y: 73
        }
      ],
      backgroundColor: "rgba(81,117,224,.6)",
      borderColor: "transparent",
      pointBorderColor: $scatter_point_dark,
      pointBackgroundColor: "#fff",
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4
    }
  ]
}

const options = {
  responsive: true,
  scales: {
    xAxes: [
      {
        position: "top",
        gridLines: {
          color: scatter_grid_color,
          drawTicks: false
        },
        scaleLabel: {
          display: true,
          labelString: "x axis"
        }
      }
    ],
    yAxes: [
      {
        position: "right",
        gridLines: {
          color: scatter_grid_color,
          drawTicks: false
        },
        scaleLabel: {
          display: true,
          labelString: "y axis"
        }
      }
    ]
  },
  maintainAspectRatio: false
}

class ScatterChart extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Scatter Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <Scatter data={data} options={options} height={300} />
        </CardBody>
      </Card>
    )
  }
}
export default ScatterChart
