import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
const data = [
  { name: "Group A", value: 500 },
  { name: "Group B", value: 400 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 100 }
]
const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}
class PieChartExample extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Pie Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="recharts-wrapper">
            <ResponsiveContainer>
              <PieChart width={500} height={500}>
                <Pie
                  data={data}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={150}
                  fill={this.props.primary}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={this.props.colors[index % this.props.colors.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default PieChartExample
