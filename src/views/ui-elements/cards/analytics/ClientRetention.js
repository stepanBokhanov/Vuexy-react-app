import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"

class ClientRetention extends React.Component {
  state = {
    options: {
      chart: {
        stacked: true,
        toolbar: { show: false }
      },
      plotOptions: {
        bar: {
          columnWidth: "10%"
        }
      },
      colors: [this.props.primary, this.props.danger],
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: this.props.labelColor,
        padding: {
          left: 0,
          right: 0
        }
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "left",
        offsetX: 0,
        fontSize: "14px",
        markers: {
          radius: 50,
          width: 10,
          height: 10
        }
      },
      xaxis: {
        labels: {
          style: {
            colors: this.props.strokeColor
          }
        },
        axisTicks: {
          show: false
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            color: this.props.strokeColor
          }
        }
      },
      tooltip: {
        x: { show: false }
      }
    },
    series: [
      {
        name: "New Clients",
        data: [175, 125, 225, 175, 160, 189, 206, 134, 159, 216, 148, 123]
      },
      {
        name: "Retained Clients",
        data: [
          -144,
          -155,
          -141,
          -167,
          -122,
          -143,
          -158,
          -107,
          -126,
          -131,
          -140,
          -137
        ]
      }
    ]
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Client Retention</CardTitle>
        </CardHeader>
        <CardBody>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={290}
            id="client-retention-chart"
          />
        </CardBody>
      </Card>
    )
  }
}
export default ClientRetention
