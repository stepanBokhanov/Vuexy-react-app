import React from "react"
import { Input, Label, Card, CardHeader, CardBody, Button } from "reactstrap"
import { X } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import { EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import "../../../assets/scss/plugins/extensions/editor.scss"
class ComposeEmail extends React.Component {
  state = {
    editorState: EditorState.createEmpty(),
    emailTo: "",
    emailSub: "",
    emailCC: "",
    emailBCC: "",
    emailBody : ""
  }
  onEditorStateChange = editorState => {
    this.setState({
      editorState
    })
  }

  handleSidebarClose = () => {
    this.props.handleComposeSidebar("close")
    this.setState({
      emailTo: "",
      emailSub: "",
      emailCC: "",
      emailBCC: "",
      editorState: EditorState.createEmpty()
    })
  }

  render() {
    const { editorState } = this.state
    return (
      <Card
        className={`compose-email shadow-none ${
          this.props.currentStatus ? "open" : ""
        }`}
      >
        <CardHeader className="compose-mail-header align-items-center">
          <div className="compose-mail-title">
            <h3 className="text-bold-600 card-title">New Mail</h3>
          </div>
          <div
            className="close-compose-mail"
            onClick={() => this.props.handleComposeSidebar("close")}
          >
            <X size={20} />
          </div>
        </CardHeader>
        <PerfectScrollbar
          options={{
            wheelPropagation: false
          }}
        >
          <CardBody className="compose-mail-body p-1">
            <div className="form-label-group pt-1">
              <Input
                id="emailTo"
                placeholder="To"
                value={this.state.emailTo}
                onChange={e => this.setState({ emailTo: e.target.value })}
              />
              <Label for="emailTo">To</Label>
            </div>
            <div className="form-label-group">
              <Input
                id="subject"
                placeholder="Subject"
                value={this.state.emailSub}
                onChange={e => this.setState({ emailSub: e.target.value })}
              />
              <Label for="Subject">subject</Label>
            </div>
            <div className="form-label-group">
              <Input
                id="cc"
                placeholder="CC"
                value={this.state.emailCC}
                onChange={e => this.setState({ emailCC: e.target.value })}
              />
              <Label for="cc">CC</Label>
            </div>
            <div className="form-label-group">
              <Input
                id="bcc"
                placeholder="BCC"
                value={this.state.emailBCC}
                onChange={e => this.setState({ emailBCC: e.target.value })}
              />
              <Label for="bcc">BCC</Label>
            </div>
            <div id="email-container">
              <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
                onChange={e => this.setState({ emailBody : e.blocks })}
                toolbar={{
                  options: [
                    "fontSize",
                    "fontFamily",
                    "embedded",
                    "emoji",
                    "image",
                    "textAlign"
                  ]
                }}
              />
            </div>
            <div className="action-btns d-flex justify-content-end mt-1">
              <Button.Ripple
                color="danger"
                className="mr-1"
                onClick={() => this.handleSidebarClose()}
              >
                Cancel
              </Button.Ripple>
              <Button.Ripple
                color="primary"
                disabled={this.state.emailTo.length && this.state.emailBody.length > 0 ? false : true}
                onClick={() => this.handleSidebarClose()}
              >
                Send
              </Button.Ripple>
            </div>
          </CardBody>
        </PerfectScrollbar>
      </Card>
    )
  }
}

export default ComposeEmail
