import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label
} from "reactstrap"

import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"

class MultipleColumnForm extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Multiple Column</CardTitle>
        </CardHeader>
        <CardBody>
          <Form className="mt-2">
            <Row>
              <Col md="6" sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="name"
                    id="nameMulti"
                    placeholder="First Name"
                  />
                  <Label for="nameMulti">First Name</Label>
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="lastname"
                    id="lastNameMulti"
                    placeholder="Last Name"
                  />
                  <Label for="lastNameMulti">Last Name</Label>
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="city"
                    id="cityMulti"
                    placeholder="City"
                  />
                  <Label for="cityMulti">City</Label>
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="country"
                    id="CountryMulti"
                    placeholder="Country"
                  />
                  <Label for="CountryMulti">Country</Label>
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="company"
                    id="CompanyMulti"
                    placeholder="Company"
                  />
                  <Label for="CompanyMulti">Company</Label>
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="email"
                    name="Email"
                    id="EmailMulti"
                    placeholder="Email"
                  />
                  <Label for="EmailMulti">Email</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Checkbox
                    color="primary"
                    icon={<Check className="vx-icon" size={16} />}
                    label="Remember Me"
                    defaultChecked={false}
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                    onClick={e => e.preventDefault()}
                  >
                    Submit
                  </Button.Ripple>
                  <Button.Ripple
                    outline
                    color="warning"
                    type="reset"
                    className="mb-1"
                  >
                    Reset
                  </Button.Ripple>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default MultipleColumnForm
