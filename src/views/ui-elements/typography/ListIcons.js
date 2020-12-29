import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { FolderMinus, FolderPlus, Folder } from "react-feather"

class ListIcons extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Lists icons</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use <code>.list-style-icons</code> class with{" "}
            <code>&ltul&gt</code> tag to create a list with icons.
          </p>
          <ul className="list-style-icons">
            <li>
              <FolderMinus />
              Folder 1
              <ul className="list-style-icons">
                <li className="ml-1">
                  <Folder />
                  Item 1
                </li>
                <li className="ml-1">
                  <Folder />
                  Item 2
                </li>
              </ul>
            </li>
            <li>
              <FolderPlus />
              Folder 2
            </li>
            <li>
              <FolderPlus />
              Folder 3
            </li>
          </ul>
        </CardBody>
      </Card>
    )
  }
}
export default ListIcons
