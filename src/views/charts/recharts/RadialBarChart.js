import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip
} from "recharts"

class RadiaBarExample extends React.Component {
  state = {
    data: [
      {
        name: "18-24",
        uv: 31.47,
        pv: 2400,
        fill: this.props.primary
      },
      {
        name: "25-29",
        uv: 26.69,
        pv: 4567,
        fill: this.props.success
      },
      {
        name: "30-34",
        uv: 15.69,
        pv: 1398,
        fill: this.props.danger
      },
      {
        name: "35-39",
        uv: 8.22,
        pv: 9800,
        fill: this.props.info
      },
      {
        name: "40-49",
        uv: 8.63,
        pv: 3908,
        fill: this.props.warning
      }
    ]
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>RadiaBar Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="recharts-wrapper">
            <ResponsiveContainer>
              <RadialBarChart
                width={500}
                height={300}
                innerRadius={20}
                outerRadius={160}
                barSize={20}
                data={this.state.data}
              >
                <RadialBar minAngle={15} background clockWise dataKey="uv" />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default RadiaBarExample
