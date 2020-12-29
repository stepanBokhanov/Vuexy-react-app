import React from "react"
import ExtensionsHeader from "../extensionsHeader"
import { Row, Col } from "reactstrap"
import { ToastContainer } from "react-toastify"
import ContextMenuBasic from "./ContextMenuBasic"
import ContextMenuLeftClick from "./ContextMenuLeftClick"
import ContextMenuDoubleClick from "./ContextMenuDoubleClick"
import ContextSubMenu from "./ContextSubmenu"
import ContextMenuDark from "./ContextMenuDark"
import ContextMenuAnimation from "./ContextMenuAnimation"

import "react-contexify/dist/ReactContexify.min.css"
import "../../assets/scss/plugins/extensions/context-menu.scss"
import "../../assets/scss/plugins/extensions/toastr.scss"
import "react-toastify/dist/ReactToastify.css"

class Contexify extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ExtensionsHeader
          title="React Contexify"
          subTitle="Adds a context menu to your react app with ease"
          link="https://github.com/fkhadra/react-contexify"
        />
        <Row>
          <Col lg="6" md="12">
            <ContextMenuBasic />
          </Col>
          <Col lg="6" md="12">
            <ContextMenuLeftClick />
          </Col>
          <Col lg="6" md="12">
            <ContextMenuDoubleClick />
          </Col>
          <Col lg="6" md="12">
            <ContextSubMenu />
          </Col>
          <Col lg="6" md="12">
            <ContextMenuDark />
          </Col>
          <Col lg="6" md="12">
            <ContextMenuAnimation />
          </Col>
          <ToastContainer />
        </Row>
      </React.Fragment>
    )
  }
}

export default Contexify
