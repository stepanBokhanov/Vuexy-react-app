import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"

class ApexAreaCharts extends React.Component {
  modifydata = (data, flag, second) => {
    let date = [], wealth = [];
    for (let x in data) {
      date.push(data[x].date);
      if (second == 0) wealth.push(Math.round(data[x].portfolio_wealth * 100) / 100);
      else wealth.push(Math.round(data[x].performance * 100) / 100);
    }
    if (!flag) return date;
    else return wealth;
  }

  render() {
    const options = {
      chart: {
        id: "areaChart"
      },
      xaxis: {
        type: "date",
        categories: this.modifydata(this.props.data, 0, this.props.second),
        tickAmount: 8
      },
      stroke: {
        curve: "smooth"
      },
      dataLabels: {
        enabled: false
      },
      colors: this.props.themeColors,
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      legend: {
        offsetY: -10
      },
      tooltip: {
        x: {
          format: "dd/MM/yy"
        }
      }
    };
    const series = [
      {
        name: "series1",
        data: this.modifydata(this.props.data, 1, this.props.second)
      }
    ];

    return (
      <Card>
        <CardHeader>
          <CardTitle>{this.props.title}</CardTitle>
        </CardHeader>
        <CardBody>
          <Chart
            options={options}
            series={series}
            type="area"
            height={500}
          />
        </CardBody>
      </Card>
    )
  }
}
export default ApexAreaCharts
