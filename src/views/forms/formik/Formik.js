import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import FormikBasic from "./FormikBasic"
import FormikErrorMsg from "./FormikErrorMsg"
import FormikValidation from "./FormikValidation"

class Formik extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Formik"
          breadCrumbParent="Form"
          breadCrumbActive="Formik"
        />
        <Row>
          <Col lg="6" md="12">
            <FormikBasic />
          </Col>
          <Col lg="6" md="12">
            <FormikErrorMsg />
          </Col>
          <Col sm="12">
            <FormikValidation />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Formik
