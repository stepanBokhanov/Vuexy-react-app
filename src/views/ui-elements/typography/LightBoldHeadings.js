import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Table } from "reactstrap"

class LightBoldHeadings extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Light / Bold Headings</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            All HTML headings are available with light and bold font-weight. Use{" "}
            <code>.text-bold-400</code> for light heading and{" "}
            <code>.text-bold-600</code> for bold headings alongwith heading tags
            or classes.
          </p>
        </CardBody>
        <Table responsive borderless className="mb-0">
          <thead>
            <tr>
              <th>Light headings</th>
              <th className="text-right">Bold headings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h1 className="text-bold-400">Heading 1</h1>
              </td>
              <td className="text-right">
                <h1 className="text-bold-600">Heading 1</h1>
              </td>
            </tr>
            <tr>
              <td>
                <h2 className="text-bold-400">Heading 2</h2>
              </td>
              <td className="text-right">
                <h2 className="text-bold-600">Heading 2</h2>
              </td>
            </tr>
            <tr>
              <td>
                <h3 className="text-bold-400">Heading 3</h3>
              </td>
              <td className="text-right">
                <h3 className="text-bold-600">Heading 3</h3>
              </td>
            </tr>
            <tr>
              <td>
                <h4 className="text-bold-400">Heading 4</h4>
              </td>
              <td className="text-right">
                <h4 className="text-bold-600">Heading 4</h4>
              </td>
            </tr>
            <tr>
              <td>
                <h5 className="text-bold-400">Heading 5</h5>
              </td>
              <td className="text-right">
                <h5 className="text-bold-600">Heading 5</h5>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className="text-bold-400">Heading 6</h6>
              </td>
              <td className="text-right">
                <h6 className="text-bold-600">Heading 6</h6>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    )
  }
}
export default LightBoldHeadings
