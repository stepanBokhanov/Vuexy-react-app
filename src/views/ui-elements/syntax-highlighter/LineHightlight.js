import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
/*eslint-disable */
import prism from "prismjs"
import LineHighlighter from "prismjs/plugins/line-highlight/prism-line-highlight"
import "prismjs/plugins/line-highlight/prism-line-highlight.css"
/*eslint-enable */

class LineHighlight extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Line Highlight</CardTitle>
        </CardHeader>
        <CardBody>
          <p>Highlights specific lines and/or line ranges.</p>
          <p>
            You specify the lines to be highlighted through the{" "}
            <em>data-line</em> attribute on the
            <code>&ltpre&gt </code> element, in the following simple format:
          </p>
          <ul>
            <li>A single number refers to the line with that number</li>
            <li>
              Ranges are denoted by two numbers, separated with a hyphen (-)
            </li>
            <li>Multiple line numbers or ranges are separated by commas.</li>
            <li>Whitespace is allowed anywhere and will be stripped off.</li>
          </ul>
          <p>Usage:</p>
          <pre>
            <code className="language-markup">{`
<pre data-line="2, 4, 8-10">
  <code class="language-css">
    Your Code
  </code>
</pre>
            `}</code>
          </pre>
          <p className="my-1">Output:</p>
          <pre data-line="2, 4, 8-10">
            <code className="language-css">
              {`
pre.line-numbers {
  position: relative
  padding-left: 3.8em
  counter-reset: linenumber
}

pre.line-numbers > code {
  position: relative
}
  `}
            </code>
          </pre>
        </CardBody>
      </Card>
    )
  }
}
export default LineHighlight
