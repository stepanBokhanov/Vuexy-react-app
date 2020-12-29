import React from "react"
import { Row, Col } from "reactstrap"
import ExtensionsHeader from "../extensionsHeader"
import DropzoneBasic from "./DropzoneBasic"
import DropzoneAccept from "./DropzoneAccept"
import DropzoneProgrammatically from "./DropzoneProgrammatically"
import DropzoneDisabled from "./DropzoneDisabled"

import "../../assets/scss/plugins/extensions/dropzone.scss"

class Uploader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ExtensionsHeader
          title="React Dropzone"
          subTitle="Simple HTML5 drag-drop zone with React.js."
          link="https://react-dropzone.js.org"
        />

        <Row>
          <Col lg="6" md="12">
            <DropzoneBasic />{" "}
          </Col>
          <Col lg="6" md="12">
            <DropzoneAccept />{" "}
          </Col>
          <Col lg="6" md="12">
            <DropzoneProgrammatically />{" "}
          </Col>
          <Col lg="6" md="12">
            <DropzoneDisabled />{" "}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Uploader
