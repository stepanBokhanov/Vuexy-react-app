import React from 'react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
// eslint-disable-next-line
import prism from "prismjs"



class Examples extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Examples</CardTitle>
        </CardHeader>
        <CardBody>
          <h5 className="font-weight-600">HTML Markup</h5>
          <p>Use the following code to use HTML syntax highlighter.</p>
          <p>Usage:</p>
          <pre>
            <code className="language-markup">
              {`
<pre>
  <code class="language-html">
    HTML CODE ...
  </code>
</pre>
            `}
            </code>
          </pre>
          <p className="my-1">Output:</p>
          <pre>
            <code className="language-markup">
              {`
<Media>
  <Media left href="#">
    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
  </Media>
  <Media body>
    <Media heading>
      Media heading
    </Media>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
  </Media>
</Media>

      `}
            </code>
          </pre>

          <h5 className="font-weight-600 mt-2">CSS Markup</h5>
          <p>Use the following code to use CSS syntax highlighter.</p>
          <p>Usage:</p>
          <pre>
            <code className="language-markup">
              {`
<pre>
  <code class="language-css">
    CSS CODE ...
  </code>
</pre>
            `}
            </code>
          </pre>
          <p className="my-1">Output:</p>
          <pre>
            <code className="language-css">
              {`
a:active {
  outline: 0
}

a:hover {
  outline: 0
}

abbr[title] {
  border-bottom: 1px dotted
}

b, strong {
  font-weight: bold
}

dfn {
  font-style: italic
}

h1 {
  font-size: 2em
  margin: 0.67em 0
}
          `}
            </code>
          </pre>

          <h5 className="font-weight-600 mt-2">JS Markup</h5>
          <p>Use the following code to use JS syntax highlighter.</p>
          <p>Usage:</p>
          <pre>
            <code className="language-markup">
              {`
<pre>
  <code class="language-js">
    JS CODE ...
  </code>
</pre>
            `}
            </code>
          </pre>
          <p className="my-1">Output:</p>
          <pre>
            <code className="language-javascript">
              {`
componentDidMount() {
  this.setState({
    item : true
  })
}
              `}
            </code>
          </pre>
        </CardBody>
      </Card>
    )
  }
}
export default Examples
