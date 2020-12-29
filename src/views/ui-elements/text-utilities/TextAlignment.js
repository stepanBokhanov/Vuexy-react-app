import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Table } from "reactstrap"
// eslint-disable-next-line
import prism from "prismjs"

class TextAlignment extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Text alignment</CardTitle>
        </CardHeader>
        <CardBody>
          <p>Easily realign text to components with text alignment classes.</p>
        </CardBody>
        <Table className="table-white-space" responsive>
          <thead>
            <tr>
              <th>Example</th>
              <th>Classes</th>
              <th>Snippet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </td>
              <td>
                <code>.text-justify</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-justify&quot&gtYour Text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="text-nowrap">
                It is a long established fact that a reader.
              </td>
              <td>
                <code>.text-nowrap</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-nowrap&quot&gtYour Text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
          </tbody>
        </Table>
        <CardBody>
          <p>
            For left, right, and center alignment, responsive classes are
            available that use the same viewport width breakpoints as the grid
            system.
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
              <td className="text-left">
                Left aligned text on all viewport sizes.
              </td>
              <td>
                <code>.text-left</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-left&quot&gtLeft aligned text on
                    all viewport sizes.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                Center aligned text on all viewport sizes.
              </td>
              <td>
                <code>.text-center</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-center&quot&gtCenter aligned text
                    on all viewport sizes.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="text-right">
                Right aligned text on all viewport sizes.
              </td>
              <td>
                <code>.text-right</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-right&quot&gtRight aligned text on
                    all viewport sizes.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="text-sm-left">
                Left aligned text on viewports sized SM or wider.
              </td>
              <td>
                <code>.text-[sm/md/lg/xl]-left</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-[sm/md/lg/xl]-left&quot&gtLeft
                    aligned text on viewports sized SM or wider.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="text-sm-center">
                Center aligned text on viewports sized SM or wider.
              </td>
              <td>
                <code>.text-[sm/md/lg/xl]-center</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-[sm/md/lg/xl]-center&quot&gtCenter
                    aligned text on viewports sized SM or wider.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="text-sm-right">
                Right aligned text on viewports sized SM or wider.
              </td>
              <td>
                <code>.text-[sm/md/lg/xl]-right</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-[sm/md/lg/xl]-Right&quot&gtRight
                    aligned text on viewports sized SM or wider.&lt/p&gt
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
export default TextAlignment
