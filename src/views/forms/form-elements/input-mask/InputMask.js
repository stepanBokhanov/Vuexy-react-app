import React from "react"
import { Row, Col, Card, CardBody, CardTitle, CardHeader } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import InputMaskDate from "./InputMaskDate"
import InputMaskCurrency from "./InputMaskCurrency"
import InputMaskPhone from "./InputMaskPhone"
import InputMaskCreditCard from "./InputMaskCreditCard"
import InputMaskPurchaseOrder from "./InputMaskPurchaseOrder"
import InputMaskDecimal from "./InputMaskDecimal"

class InputMask extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Input Mask"
          breadCrumbParent="Form Elements"
          breadCrumbActive="Input Mask"
        />
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle>Input Masks</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6" sm="12">
                    <InputMaskDate />
                  </Col>
                  <Col md="6" sm="12">
                    <InputMaskCurrency />
                  </Col>
                  <Col md="6" sm="12">
                    <InputMaskPhone />
                  </Col>
                  <Col md="6" sm="12">
                    <InputMaskCreditCard />
                  </Col>
                  <Col md="6" sm="12">
                    <InputMaskPurchaseOrder />
                  </Col>
                  <Col md="6" sm="12">
                    <InputMaskDecimal />
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
export default InputMask
