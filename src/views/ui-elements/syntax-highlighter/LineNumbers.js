import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
/*eslint-disable */

import prism from "prismjs"
import LineNumbers from "prismjs/plugins/line-numbers/prism-line-numbers"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

/*eslint-enable */

class LineNumber extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Line Numbers</CardTitle>
        </CardHeader>
        <CardBody>
          <p>Line number at the beginning of code lines.</p>
          <p>
            Obviously, this is supposed to work only for code blocks (
            <code>&ltpre&gt &ltcode&gt</code>) and not for inline code. Add
            class line-numbers to your desired <code>&ltpre&gt</code> and
            line-numbers plugin will take care.
          </p>
          <p>
            Optional: You can specify the data-start (Number) attribute on the{" "}
            <code>&ltpre&gt</code> element. It will shift the line counter.
          </p>

          <p>usage:</p>
          <pre>
            <code className="language-markup">
              {`
<pre class="line-numbers">
  <code class="language-javascript">
   Code here...
  </code>
</pre>
    `}
            </code>
          </pre>
          <p className="my-1">Output:</p>
          <pre className="line-numbers">
            <code className="language-javascript">
              {` componentDidMount = () => {
    if (typeof self==='undefined' || !self.Prism || !self.document) {
      return
    }
  }`}
            </code>
          </pre>
        </CardBody>
      </Card>
    )
  }
}
export default LineNumber
