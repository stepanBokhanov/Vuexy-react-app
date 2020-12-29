import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"

class BlockquoteStyling extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Blockquotes styling</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Add a{" "}
            <code className="highlighter-rouge">
              .border-[left / right]-[color] .border-[left / right]-3
            </code>{" "}
            helper classes, where color can be any color from Vuexy Admin color
            palette.
          </p>
          <blockquote className="blockquote pl-1 border-left-primary border-left-3">
            <p className="mb-0">
              Sometimes when you innovate, you make mistakes. It is best to
              admit them quickly, and get on with improving your other
              innovations.
            </p>
            <footer className="blockquote-footer">
              Steve Jobs <cite title="Source Title">Entrepreneur</cite>
            </footer>
          </blockquote>
          <blockquote className="blockquote pr-1 text-right border-right-primary border-right-3">
            <p className="mb-0">
              Sometimes when you innovate, you make mistakes. It is best to
              admit them quickly, and get on with improving your other
              innovations.
            </p>
            <footer className="blockquote-footer">
              Steve Jobs <cite title="Source Title">Entrepreneur</cite>
            </footer>
          </blockquote>
        </CardBody>
      </Card>
    )
  }
}
export default BlockquoteStyling
