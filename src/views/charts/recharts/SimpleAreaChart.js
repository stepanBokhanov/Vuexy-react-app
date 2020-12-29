import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
]

class SimpleAreaChart extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Area Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="recharts-wrapper">
            <ResponsiveContainer>
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stackId="1"
                  stroke={this.props.primary}
                  fill={this.props.primary}
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stackId="1"
                  stroke={this.props.success}
                  fill={this.props.success}
                />
                <Area
                  type="monotone"
                  dataKey="amt"
                  stackId="1"
                  stroke={this.props.danger}
                  fill={this.props.danger}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default SimpleAreaChart
