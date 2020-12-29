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
          <CardTitle>Controlled</CardTitle>
        </CardHeader>
        <CardBody>
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
        </CardBody>
      </Card>
    )
  }
}

export default EditorControlled
