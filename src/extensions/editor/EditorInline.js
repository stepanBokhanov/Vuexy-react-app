import React from "react"
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap"
import { EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg"

class EditorControlled extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    })
  }

  render() {
    const { editorState } = this.state

    return (
      <Card>
        <CardHeader>
          <CardTitle>Inline Editor Only Visible When Focused</CardTitle>
        </CardHeader>
        <CardBody>
          <Editor
            toolbarClassName="demo-toolbar-absolute"
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            defaultEditorState={editorState}
            toolbarOnFocus
            toolbar={{
              options: ["inline", "blockType", "fontSize", "fontFamily"],
              inline: {
                options: [
                  "bold",
                  "italic",
                  "underline",
                  "strikethrough",
                  "monospace"
                ],
                bold: { className: "bordered-option-classname" },
                italic: { className: "bordered-option-classname" },
                underline: { className: "bordered-option-classname" },
                strikethrough: { className: "bordered-option-classname" },
                code: { className: "bordered-option-classname" }
              },
              blockType: {
                className: "bordered-option-classname"
              },
              fontSize: {
                className: "bordered-option-classname"
              },
              fontFamily: {
                className: "bordered-option-classname"
              }
            }}
          />
        </CardBody>
      </Card>
    )
  }
}

export default EditorControlled
