import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Table } from "reactstrap"
// eslint-disable-next-line
import prism from "prismjs"

class TextTransform extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Text transform</CardTitle>
        </CardHeader>
        <CardBody>
          <p>Transform text in components with text capitalization classes.</p>
          <p>
            Note how <code>text-capitalize</code> only changes the first letter
            of each word, leaving the case of any other letters unaffected.
          </p>
        </CardBody>
        <Table className="table-white-space mb-0" responsive>
          <thead>
            <tr>
              <th>Example</th>
              <th>Classes</th>
              <th>Snippet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-lowercase">Lowercased Text</td>
              <td>
                <code>.text-lowercase</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-lowercase&quot&gtLowercased
                    text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="text-uppercase">uppercased text</td>
              <td>
                <code>.text-uppercase</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-uppercase&quot&gtUppercased
                    text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="text-capitalize">CapiTaliZed text.</td>
              <td>
                <code>.text-capitalize</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-capitalize&quot&gtCapiTaliZed
                    text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    )
  }
}
export default TextTransform
