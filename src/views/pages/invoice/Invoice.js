import React from "react"
import {
  Card,
  CardBody,
  Row,
  Col,
  Media,
  Table,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import logo from "../../../assets/img/logo/logo.png"
import { Mail, Phone, FileText, Download } from "react-feather"

import "../../../assets/scss/pages/invoice.scss"

class Invoice extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Invoice"
          breadCrumbParent="Pages"
          breadCrumbActive="Invoice"
        />
        <Row>
          <Col className="mb-1 invoice-header" md="5" sm="12">
            <InputGroup>
              <Input placeholder="Email" />
              <InputGroupAddon addonType="append">
                <Button.Ripple color="primary" outline>
                  Send Invoice
                </Button.Ripple>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col
            className="d-flex flex-column flex-md-row justify-content-end invoice-header mb-1"
            md="7"
            sm="12"
          >
            <Button
              className="mr-1 mb-md-0 mb-1"
              color="primary"
              onClick={() => window.print()}
            >
              <FileText size="15" />
              <span className="align-middle ml-50">Print</span>
            </Button>
            <Button.Ripple color="primary" outline>
              <Download size="15" />
              <span className="align-middle ml-50">Download</span>
            </Button.Ripple>
          </Col>
          <Col className="invoice-wrapper" sm="12">
            <Card className="invoice-page">
              <CardBody>
                <Row>
                  <Col md="6" sm="12" className="pt-1">
                    <Media className="pt-1">
                      <img src={logo} alt="logo" />
                    </Media>
                  </Col>
                  <Col md="6" sm="12" className="text-right">
                    <h1>Invoice</h1>
                    <div className="invoice-details mt-2">
                      <h6>INVOICE NO.</h6>
                      <p>001/2020</p>
                      <h6 className="mt-2">INVOICE DATE</h6>
                      <p>10 Dec 2018</p>
                    </div>
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col md="6" sm="12">
                    <h5>Recipient</h5>
                    <div className="recipient-info my-2">
                      <p>Peter Stark</p>
                      <p>8577 West West Drive</p>
                      <p>Holbrook, NY</p>
                      <p>90001</p>
                    </div>
                    <div className="recipient-contact pb-2">
                      <p>
                        <Mail size={15} className="mr-50" />
                        peter@mail.com
                      </p>
                      <p>
                        <Phone size={15} className="mr-50" />
                        +91 988 888 8888
                      </p>
                    </div>
                  </Col>
                  <Col md="6" sm="12" className="text-right">
                    <h5>Microsion Technologies Pvt. Ltd.</h5>
                    <div className="company-info my-2">
                      <p>9 N. Sherwood Court</p>
                      <p>Elyria, OH</p>
                      <p>94203</p>
                    </div>
                    <div className="company-contact">
                      <p>
                        <Mail size={15} className="mr-50" />
                        hello@pixinvent.net
                      </p>
                      <p>
                        <Phone size={15} className="mr-50" />
                        +91 999 999 9999
                      </p>
                    </div>
                  </Col>
                </Row>
                <div className="invoice-items-table pt-1">
                  <Row>
                    <Col sm="12">
                      <Table responsive borderless>
                        <thead>
                          <tr>
                            <th>TASK DESCRIPTION</th>
                            <th>HOURS</th>
                            <th>RATE</th>
                            <th>AMOUNT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Website Redesign</td>
                            <td>60</td>
                            <td>15 USD</td>
                            <td>90000 USD</td>
                          </tr>
                          <tr>
                            <td>Newsletter template design</td>
                            <td>20</td>
                            <td>12 USD</td>
                            <td>24000 USD</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </div>
                <div className="invoice-total-table">
                  <Row>
                    <Col
                      sm={{ size: 7, offset: 5 }}
                      xs={{ size: 7, offset: 5 }}
                    >
                      <Table responsive borderless>
                        <tbody>
                          <tr>
                            <th>SUBTOTAL</th>
                            <td>114000 USD</td>
                          </tr>
                          <tr>
                            <th>DISCOUNT (5%)</th>
                            <td>5700 USD</td>
                          </tr>
                          <tr>
                            <th>TOTAL</th>
                            <td>108300 USD</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </div>
                <div className="text-right pt-3 invoice-footer">
                  <p>
                    Transfer the amounts to the business amount below. Please
                    include invoice number on your check.
                  </p>
                  <p className="bank-details mb-0">
                    <span className="mr-4">
                      BANK: <strong>FTSBUS33</strong>
                    </span>
                    <span>
                      IBAN: <strong>G882-1111-2222-3333</strong>
                    </span>
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Invoice
