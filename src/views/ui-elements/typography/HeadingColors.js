import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Table } from "reactstrap"

class HeadingColors extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Heading colors</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Heading elements are also changed with different color options. Use
            <code>[primary/secondary/success/danger/info/warning]</code> class
            with heading elements.
          </p>
        </CardBody>
        <Table responsive borderless className="mb-0">
          <tbody>
            <tr>
              <td>
                <h1 className="primary">Display heading</h1>
              </td>
            </tr>
            <tr>
              <td>
                <h2 className="success">Display heading</h2>
              </td>
            </tr>
            <tr>
              <td>
                <h3 className="info">Display heading</h3>
              </td>
            </tr>
            <tr>
              <td>
                <h4 className="warning">Display heading</h4>
              </td>
            </tr>
            <tr>
              <td>
                <h5 className="danger">Display heading</h5>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className="dark">Display heading</h6>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    )
  }
}
export default HeadingColors
