import React from "react"
import ExtensionsHeader from "../extensionsHeader"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Input
} from "reactstrap"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "../../assets/scss/plugins/extensions/toastr.scss"

class Clipboard extends React.Component {
  state = {
    value: "Copy Me!",
    copied: false
  }

  handleCopy = ({ target: { value } }) => {
    this.setState({ value, copied: false })
  }

  onCopy = () => {
    this.setState({ copied: true })
    toast.success("Text Copied Successfully", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000
    })
  }

  render() {
    return (
      <React.Fragment>
        <ExtensionsHeader
          title="React Copy To Clipboard"
          subTitle="Copy to clipboard React component"
          link="https://github.com/nkbt/react-copy-to-clipboard"
        />
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle>Clipboard</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="2" sm="12" className="pr-md-0 mb-1">
                    <Input
                      value={this.state.value}
                      onChange={this.handleCopy}
                    />
                  </Col>
                  <Col md="2" sm="12" className="mb-1">
                    <CopyToClipboard
                      onCopy={this.onCopy}
                      text={this.state.value}
                    >
                      <Button.Ripple color="primary">Copy!</Button.Ripple>
                    </CopyToClipboard>
                    <ToastContainer />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Clipboard
