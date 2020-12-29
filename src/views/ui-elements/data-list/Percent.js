import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"

class GoalOverview extends React.Component {
  state = {
    options: {
      chart: {
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1
        }
      },
      colors: [this.props.success],
      plotOptions: {
        radialBar: {
          size: 110,
          startAngle: -140,
          endAngle: 150,
          hollow: {
            size: "77%"
          },
          track: {
            background: this.props.strokeColor,
            strokeWidth: "50%"
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 18,
              color: this.props.strokeColor,
              fontSize: "4rem"
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#00b5b5"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      }
    },
    series: [this.props.percent]
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{this.props.title}</CardTitle>
        </CardHeader><hr/>
        <CardBody>
          <Chart
            options={this.state.options}
            series={[this.props.percent]}
            type="radialBar"
            height={200}
          />
        </CardBody>
      </Card>
    )
  }
}
export default GoalOverview
