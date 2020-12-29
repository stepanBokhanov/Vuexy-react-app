import React from "react"
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap"
import PropTypes from "prop-types"
import { EditorState, Modifier } from "draft-js"
import { Editor } from "react-draft-wysiwyg"

class CustomToolbarOption extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    editorState: PropTypes.object
  }

  addStar = () => {
    const { editorState, onChange } = this.props
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      "⭐",
      editorState.getCurrentInlineStyle()
    )
    onChange(EditorState.push(editorState, contentState, "insert-characters"))
  }

  render() {
    return (
      <div className="custom-tool">
        <span aria-label="star" role="img" onClick={this.addStar}>
          ⭐
        </span>
      </div>
    )
  }
}

const EditorCustomToolbar = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Custom Toolbar Option - Insert Star</CardTitle>
      </CardHeader>
      <CardBody>
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          toolbarCustomButtons={[<CustomToolbarOption />]}
        />
      </CardBody>
    </Card>
  )
}

export default EditorCustomToolbar
