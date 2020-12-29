import React from "react"
import ExtensionsHeader from "../extensionsHeader"
import { Row, Col } from "reactstrap"
import ToastrTypes from "./ToastTypes"
import ToastrPositions from "./ToastPositions"
import ToastrAnimations from "./ToastrAnimations"
import ToastrOptions from "./ToastifyOptions"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "../../assets/scss/plugins/extensions/toastr.scss"

class Toastr extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ExtensionsHeader
          title="React Toastify"
          subTitle="React Toastify makes notification easy 🚀 !"
          link="https://github.com/fkhadra/react-toastify"
        />

        <Row>
          <Col sm="12">
            <ToastrTypes />
          </Col>
          <Col sm="12">
            <ToastrPositions />
          </Col>
          <Col sm="12">
            <ToastrAnimations />
          </Col>
          <Col sm="12">
            <ToastrOptions />
          </Col>
          <ToastContainer />
        </Row>
      </React.Fragment>
    )
  }
}

export default Toastr
