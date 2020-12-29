import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
// eslint-disable-next-line
import prism from "prismjs"
class BasicUsage extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Basic Usage</CardTitle>
        </CardHeader>
        <CardBody>
          <p>First You will need to import prism.</p>
          <p>
            Prism does its best to encourage good authoring practices.
            Therefore, it only works with
            <code>&ltcode&gt</code>elements, since marking up code without a{" "}
            <code>&ltcode&gt </code>element is semantically invalid.
            <a
              href="http://www.w3.org/TR/html5/text-level-semantics.html#the-code-element"
              target="_blank"
              rel="noopener noreferrer"
            >
              According to the HTML5 spec
            </a>
            , the recommended way to define a code language is a{" "}
            <code>language-xxxx</code>class, which is what Prism uses. To make
            things easier however, Prism assumes that this language definition
            is inherited. Therefore, if multiple <code>&ltcode&gt </code>
            elements have the same language, you can add the
            <code>language-xxxx</code>class on one of their common ancestors.
            This way, you can also define a document-wide default language, by
            adding a <code>language-xxxx</code>class on the
            <code>&ltbody&gt </code>or <code>&lthtml&gt</code>element.{" "}
          </p>
          <p>
            If you want to opt-out of highlighting for a{" "}
            <code>&ltcode&gt</code>
            element that is a descendant of an element with a declared code
            language, you can add the class <code>language-none</code>to it (or
            any non-existing language, really).
          </p>
          <p>
            The{" "}
            <a
              href="https://www.w3.org/TR/html5/grouping-content.html#the-pre-element"
              target="_blank"
              rel="noopener noreferrer"
            >
              recommended way to mark up a code block
            </a>
            (both for semantics and for Prism) is a <code>&ltpre&gt</code>
            element with a <code>&ltcode&gt</code>element inside, like so:
          </p>
          <p>code:</p>
          <pre>
            <code className="language-markup">
              {`
<pre>
  <code class="language-css">
    p {
        color: red
      }
  </code>
</pre>
  `}
            </code>
          </pre>
          <p className="my-1">Output</p>
          <pre>
            <code className="language-css">
              {`
p {
  color: red
}
                `}
            </code>
          </pre>
          <p className="mt-1">
            If you use that pattern, the <code>&ltpre&gt</code>will
            automatically get the <code>language-xxxx</code>class (if it doesn't
            already have it) and will be styled as a code block.
          </p>
        </CardBody>
      </Card>
    )
  }
}
export default BasicUsage
