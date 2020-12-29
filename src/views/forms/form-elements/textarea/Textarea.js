import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import TextareaDefault from "./TextareaDefault"
import TextareaFloatingLabel from "./TextareaFloatingLabel"
import TextareaCounter from "./TextareaCounter"

class Textarea extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Textarea"
          breadCrumbParent="Form Elements"
          breadCrumbActive="Textarea"
        />
        <Row>
          <Col sm="12">
            <TextareaDefault />
          </Col>
          <Col sm="12">
            <TextareaFloatingLabel />
          </Col>
          <Col sm="12">
            <TextareaCounter />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Textarea
