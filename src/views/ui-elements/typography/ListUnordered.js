import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"

class ListUnordered extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Lists Unordered </CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            List of items in which the order does not explicitly matter. Use{" "}
            <code>.list-style-circle</code> or <code>.list-style-square</code>{" "}
            class in unordered list to add circle or square bullet points.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>
              Nulla volutpat aliquam velit
              <ul className="list-style-square">
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>consectetur adipisicing elit. At, quae?</li>
              </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
        </CardBody>
      </Card>
    )
  }
}
export default ListUnordered
