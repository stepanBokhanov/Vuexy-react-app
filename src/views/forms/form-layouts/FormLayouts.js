import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import HorizontalForm from "./HorizontalForm"
import HorizontalFormIcons from "./HorizontalFormIcons"
import VerticalForm from "./VerticalForm"
import VerticalFormIcons from "./VerticalFormIcons"
import FloatingLabelForm from "./FloatingLabelForm"
import FloatingLabelFormIcons from "./FloatingLabelFormIcons"
import MultipleColumnForm from "./MultipleColumnForm"

class FormLayouts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Form Layouts"
          breadCrumbParent="Form"
          breadCrumbActive="Form Layouts"
        />
        <Row>
          <Col lg="6" md="12">
            <HorizontalForm />
          </Col>
          <Col lg="6" md="12">
            <HorizontalFormIcons />
          </Col>
          <Col lg="6" md="12">
            <VerticalForm />
          </Col>
          <Col lg="6" md="12">
            <VerticalFormIcons />
          </Col>
          <Col lg="6" md="12">
            <FloatingLabelForm />
          </Col>
          <Col lg="6" md="12">
            <FloatingLabelFormIcons />
          </Col>
          <Col sm="12">
            <MultipleColumnForm />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default FormLayouts
