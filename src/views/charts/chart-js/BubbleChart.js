import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { Bubble } from "react-chartjs-2"

const data = {
  animation: {
    duration: 10000
  },
  datasets: [
    {
      label: ["China"],
      backgroundColor: "rgba(255,221,50,0.2)",
      borderColor: "rgba(255,221,50,1)",
      data: [
        {
          x: 21269017,
          y: 5.245,
          r: 15
        }
      ]
    },
    {
      label: ["Denmark"],
      backgroundColor: "rgba(60,186,159,0.2)",
      borderColor: "rgba(60,186,159,1)",
      data: [
        {
          x: 258702,
          y: 7.526,
          r: 10
        }
      ]
    },
    {
      label: ["Germany"],
      backgroundColor: "rgba(0,0,0,0.2)",
      borderColor: "#000",
      data: [
        {
          x: 3979083,
          y: 6.994,
          r: 15
        }
      ]
    },
    {
      label: ["Japan"],
      backgroundColor: "rgba(193,46,12,0.2)",
      borderColor: "rgba(193,46,12,1)",
      data: [
        {
          x: 4931877,
          y: 5.921,
          r: 15
        }
      ]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: true,
    text: "Predicted world population (millions) in 2050"
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          color: "#dae1e7"
        },
        scaleLabel: {
          display: true,
          labelString: "GDP (PPP)"
        }
      }
    ],
    yAxes: [
      {
        display: true,
        gridLines: {
          color: "#dae1e7"
        },
        scaleLabel: {
          display: true,
          labelString: "Happiness"
        },
        ticks: {
          stepSize: 0.5
        }
      }
    ]
  }
}

class BubbleChart extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Bubble Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <Bubble data={data} options={options} height={300} />
        </CardBody>
      </Card>
    )
  }
}
export default BubbleChart
