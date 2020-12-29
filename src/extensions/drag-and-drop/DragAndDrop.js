import React from "react"
import ExtensionsHeader from "../extensionsHeader"
import { Row, Col } from "reactstrap"
import DndVertical from "./DndVertical"
import DndHorizontal from "./DndCards"
import DndMultiple from "./DndMultiple"

import "../../assets/scss/plugins/extensions/drag-and-drop.scss"

class DragAndDrop extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ExtensionsHeader
          title="React Beautiful Drag And Drop"
          subTitle="Beautiful and accessible drag and drop for lists with React"
          link="https://github.com/atlassian/react-beautiful-dnd"
        />
        <Row>
          <Col sm="12">
            <DndHorizontal />
          </Col>
          <Col sm="12">
            <DndVertical />
          </Col>
          <Col sm="12">
            <DndMultiple />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default DragAndDrop
