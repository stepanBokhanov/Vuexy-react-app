import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"

class NativeFontStack extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Native font stack</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            The default web fonts (Helvetica Neue, Helvetica, and Arial) have
            been dropped in Bootstrap 4 and replaced with a “native font stack”
            for optimum text rendering on every device and OS. Read more about
            <a
              href="https://getbootstrap.com/docs/4.3/content/reboot/#native-font-stack"
              target="_blank"
              rel="noopener noreferrer"
            >
              native font stacks
            </a>
          </p>
          <ul>
            <li>
              Use a {""}
              <a
                href="https://getbootstrap.com/docs/4.3/content/reboot/#native-font-stack"
                rel="noopener noreferrer"
                target="_blank"
              >
                native font stack {""}
              </a>
              that selects the best
              <code>font-family</code> for each OS and device.
            </li>
            <li>
              Use the <code>$font-family-base</code>,{" "}
              <code>$font-size-base</code>, and <code>$line-height-base</code>{" "}
              attributes as our typographic base applied to the body tag.
            </li>
            <li>
              Set the global link color via <code>$link-color</code> and apply
              link underlines only on <code>:hover</code>.
            </li>
            <li>
              Use <code>$body-bg</code> to set a <code>background-color</code>{" "}
              on the body tag (<code>#fff</code> by default).
            </li>
          </ul>
        </CardBody>
      </Card>
    )
  }
}
export default NativeFontStack
