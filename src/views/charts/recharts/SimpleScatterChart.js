import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"
const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
  { x: 125, y: 290, z: 190 },
  { x: 115, y: 270, z: 210 },
  { x: 105, y: 260, z: 230 },
  { x: 95, y: 250, z: 240 },
  { x: 85, y: 240, z: 250 },
  { x: 75, y: 220, z: 260 }
]
class ScatterChartExample extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Scatter</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="recharts-wrapper">
            <ResponsiveContainer>
              <ScatterChart
                width={400}
                height={400}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20
                }}
              >
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter name="A school" data={data} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default ScatterChartExample
