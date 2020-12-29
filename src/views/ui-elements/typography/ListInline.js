import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { Facebook, Instagram, Twitter } from "react-feather"

class ListInline extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Inline Lists</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            To create a inline list use <code>.list-inline</code> class with{" "}
            <code>&ltul&gt</code> tag and, class{" "}
            <code>.list-inline-item</code> with <code>&ltli&gt</code> tag.
          </p>
          <p>
            Use inline numbers, alphabet, icons etc... for ordered Inline List.
          </p>
          <ul className="list-inline">
            <li className="list-inline-item">Chocolate</li>
            <li className="list-inline-item">Cake</li>
            <li className="list-inline-item">Ice-Cream</li>
          </ul>
          <ul className="list-inline">
            <li className="list-inline-item">1. Chocolate</li>
            <li className="list-inline-item">2. Cake</li>
            <li className="list-inline-item">3. Ice-Cream</li>
          </ul>
          <ul className="list-inline">
            <li className="list-inline-item">
              <Facebook size="14" /> Facebook
            </li>
            <li className="list-inline-item">
              <Instagram size="14" /> Instagram
            </li>
            <li className="list-inline-item">
              <Twitter size="14" /> Twitter
            </li>
          </ul>
        </CardBody>
      </Card>
    )
  }
}
export default ListInline
