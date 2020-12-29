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
import { Check, User, Mail, Smartphone, Lock } from "react-feather"

class FloatingLabelIcons extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Vertical Form With Floating Labels And Icons</CardTitle>
        </CardHeader>
        <CardBody>
          <Form className="mt-2">
            <Row>
              <Col sm="12">
                <FormGroup className="has-icon-left form-label-group position-relative">
                  <Input
                    type="text"
                    name="name"
                    id="nameFloatingIcons"
                    placeholder="First Name"
                  />
                  <div className="form-control-position">
                    <User size={15} />
                  </div>
                  <Label for="nameFloatingIcons">First Name</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="has-icon-left form-label-group position-relative">
                  <Input
                    type="email"
                    name="Email"
                    id="EmailFloatingIcons"
                    placeholder="Email"
                  />
                  <div className="form-control-position">
                    <Mail size={15} />
                  </div>
                  <Label for="EmailFloatingIcons">Email</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="has-icon-left form-label-group position-relative">
                  <Input
                    type="number"
                    name="mobile"
                    id="IconsMobileFloating"
                    placeholder="Mobile"
                  />
                  <div className="form-control-position">
                    <Smartphone size={15} />
                  </div>
                  <Label for="IconsMobileFloating">Mobile</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="has-icon-left form-label-group position-relative">
                  <Input
                    type="password"
                    name="password"
                    id="IconsPasswordFloating"
                    placeholder="Password"
                  />
                  <div className="form-control-position">
                    <Lock size={15} />
                  </div>
                  <Label for="IconsPasswordFloating">Password</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="has-icon-left form-label-group position-relative">
                  <Checkbox
                    color="primary"
                    icon={<Check className="vx-icon" size={16} />}
                    label="Remember Me"
                    defaultChecked={false}
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="has-icon-left form-label-group position-relative">
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
export default FloatingLabelIcons
