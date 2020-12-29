import React from "react"
import ExtensionsHeader from "../extensionsHeader"
import { Row, Col } from "reactstrap"
import EditorControlled from "./EditorControlled"
import EditorCustomToolbar from "./EditorCustomToolbar"
import EditorImage from "./EditorImage"
import EditorInline from "./EditorInline"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import "../../assets/scss/plugins/extensions/editor.scss"

class Editor extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ExtensionsHeader
          title="Wysiwyg Editor"
          subTitle="A Wysiwyg editor is build on top of ReactJS and DraftJS"
          link="https://github.com/jpuri/react-draft-wysiwyg"
        />
        <Row>
          <Col sm="12">
            <EditorControlled />
          </Col>
          <Col sm="12">
            <EditorCustomToolbar />
          </Col>
          <Col sm="12">
            <EditorImage />
          </Col>
          <Col sm="12">
            <EditorInline />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Editor
