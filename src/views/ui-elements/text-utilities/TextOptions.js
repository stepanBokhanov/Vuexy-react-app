import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Table } from "reactstrap"
// eslint-disable-next-line
import prism from "prismjs"

class TextOptions extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Text Options</CardTitle>
        </CardHeader>
        <CardBody>
          <h5 className="mb-1">Font Size</h5>
          <p>
            Vuexy Admin provides diffrent helper classes to change font size.
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
              <td className="font-large-3">Large lg text size.</td>
              <td>
                <code>.font-large-3</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quotfont-large-3&quot&gtYour Text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="font-large-2">Large lg text size.</td>
              <td>
                <code>.font-large-2</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quotfont-large-2&quot&gtYour Text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="font-large-1">Large lg text size.</td>
              <td>
                <code>.font-large-1</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quotfont-large-1&quot&gtYour Text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="font-medium-3">Medium md text size.</td>
              <td>
                <code>.font-medium-3</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quotfont-medium-3&quot&gtYour
                    Text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="font-medium-2">Medium md text size.</td>
              <td>
                <code>.font-medium-2</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quotfont-medium-2&quot&gtYour
                    Text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="font-medium-1">Medium md text size.</td>
              <td>
                <code>.font-medium-1</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quotfont-medium-1&quot&gtYour
                    Text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td>Normal base text size.</td>
              <td>N/A</td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp&gtYour Text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="font-small-3">Small sm text size..</td>
              <td>
                <code>.font-small-3</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quotfont-small-3&quot&gtYour Text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="font-small-2">Small sm text size.</td>
              <td>
                <code>.font-small-2</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quotfont-small-2&quot&gtYour Text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="font-small-1">Small sm text size.</td>
              <td>
                <code>.font-small-1</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quotfont-small-1&quot&gtYour Text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
          </tbody>
        </Table>
        <CardBody>
          <h5 className="mb-1">Font Weight</h5>
          <p>
            Vuexy Admin provide font weight class{" "}
            <code>.text-bold-[weight]</code>, where
            <code>[weight] value can be 300, 400, 500, 600, 700.</code>
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
              <td className="text-bold-300">Font weight 300</td>
              <td>
                <code>.text-bold-300</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-bold-300&quot&gtYour
                    Text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="text-bold-400">Font weight 400</td>
              <td>
                <code>.text-bold-400</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-bold-400&quot&gtYour
                    Text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td className="text-bold-600">Font weight 600</td>
              <td>
                <code>.text-bold-600</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp class=&quottext-bold-600&quot&gtYour
                    Text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
          </tbody>
        </Table>
        <CardBody>
          <h5 className="mb-1">Inline text elements</h5>
          <p>Styling for common inline HTML5 elements.</p>
          <p>
            <code>.mark</code> and <code>.small</code> classes are also
            available to apply the same styles as <code>&ltmark&gt</code> and{" "}
            <code>&ltsmall&gt</code> while avoiding any unwanted semantic
            implications that the tags would bring.
          </p>
          <p>
            While not shown above, feel free to use <code>&ltb&gt</code> and{" "}
            <code>&lti&gt</code> in HTML5. <code>&ltb&gt</code> is meant to
            highlight words or phrases without conveying additional importance
            while <code>&lti&gt</code> is mostly for voice, technical terms,
            etc.
          </p>
        </CardBody>
        <Table responsive className="mb-0">
          <thead>
            <tr>
              <th>Example</th>
              <th>Snippet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                You can use the mark tag to <mark>highlight</mark> text.
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp&gtYou can use the mark tag to
                    &ltmark&gthighlight&lt/mark&gt text.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td>
                <del>
                  This line of text is meant to be treated as deleted text.
                </del>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp&gt &ltdel&gtThis line of text is meant to be
                    treated as deleted text.&lt/del&gt&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td>
                <s>
                  This line of text is meant to be treated as no longer
                  accurate.
                </s>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp&gt &lts&gtThis line of text is meant to be treated
                    as no longer accurate.&lt/s&gt&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td>
                <s>
                  This line of text is meant to be treated as no longer
                  accurate.
                </s>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp&gt &lts&gtThis line of text is meant to be treated
                    as no longer accurate.&lt/s&gt&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td>
                This line of text{" "}
                <ins>
                  is meant to be treated as an addition to the document.
                </ins>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp&gt This line of text &ltins&gt is meant to be
                    treated as an addition to the
                    document.&lt/ins&gt&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td>
                <u>This line of text will render as underlined.</u>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp&gt &ltu&gt This line of text will render as
                    underlined. &lt/u&gt&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td>
                <small>
                  This line of text is meant to be treated as fine print.
                </small>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp&gt &ltsmall&gt This line of text is meant to be
                    treated as fine print. &lt/small&gt&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td>
                <strong>This line rendered as bold text.</strong>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp&gt &ltstrong&gt This line rendered as bold text.
                    &lt/strong&gt&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td>
                <em>This line rendered as italicized text.</em>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp&gt &ltem&gt This line rendered as italicized text.
                    &lt/em&gt&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td>
                Sample{" "}
                <abbr title="HyperText Markup Language">abbreviation</abbr>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp&gt Sample &ltabbr title=&quotHyperText Markup
                    Language&quot&gtabbreviation&lt/abbr&gt&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td>
                <var>y</var> = <var>m</var> + <var>b</var>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp&gt &ltvar&gty&lt/var&gt =
                    &ltvar&gtm&lt/var&gt + &ltvar&gtb&lt/var&gt
                    &lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td>
                to edit settings press <kbd>ctrl+</kbd>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltp&gt Use the &ltkbd&gt to indicate input that is
                    typically entered via keyboard.&lt/p&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td>
                <samp>
                  This text is meant to be treated as sample output from a
                  computer program.{" "}
                </samp>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltsamp&gtThis text is meant to be treated as sample
                    output from a computer program.&lt/samp&gt
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <td>
                <code>Inline code snippet</code>
              </td>
              <td>
                <pre>
                  <code className="language-markup">
                    &ltcode&gtWrap inline snippets of code with code
                    tag.&lt/code&gt
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
export default TextOptions
