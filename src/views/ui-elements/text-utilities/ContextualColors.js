import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Table } from "reactstrap"
// eslint-disable-next-line
import prism from "prismjs"

class ContextualColors extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Contextual colors</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Convey meaning through color with a handful of emphasis utility
            classes. These may also be applied to links and will darken on hover
            just like our default link styles.
          </p>
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
              <td className="text-muted">Muted Text</td>
              <td>
                <code>.text-muted</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-muted&quot&gt Your Text. &lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="text-primary">Primary Text</td>
              <td>
                <code>.text-primary</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-primary&quot&gt Your Text.
                    &lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="text-success">Success Text</td>
              <td>
                <code>.text-success</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-success&quot&gt Your Text.
                    &lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="text-danger">Danger Text</td>
              <td>
                <code>.text-danger</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-danger&quot&gt Your Text.
                    &lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="text-info">Info Text</td>
              <td>
                <code>.text-info</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-info&quot&gt Your Text. &lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="text-warning">Warning Text</td>
              <td>
                <code>.text-warning</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-warning&quot&gt Your Text.
                    &lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
          </tbody>
        </Table>
        <CardBody>
          <p>
            You can also use text lighten, darken and accent classes. You don't
            have to prefix <code>text-</code> if you're using darken, lighten
            and accent classes.
          </p>
          <ul>
            <li>
              <code>.colorName .lighten-*</code>For lighten text color, this two
              classes needed. Here *: 1,2,3,4 for lighten color options.
            </li>
            <li>
              <code>.colorName .darken-*</code>For darken text color, this two
              classes needed. Here *: 1,2,3,4 for darken color options.
            </li>
            <li>
              <code>.colorName .accent-*</code>For accent text color, this two
              classes needed. Here *: 1,2,3,4 for accent color options.
            </li>
          </ul>
        </CardBody>
      </Card>
    )
  }
}
export default ContextualColors
