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

class VerticalFormIcons extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Vertical Form Icons</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm="12">
                <Label for="nameVerticalIcons">First Name</Label>
                <FormGroup className="has-icon-left position-relative">
                  <Input
                    type="text"
                    name="name"
                    id="nameVerticalIcons"
                    placeholder="First Name"
                  />
                  <div className="form-control-position">
                    <User size={15} />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="12">
                <Label for="EmailVerticalIcons">Email</Label>
                <FormGroup className="has-icon-left position-relative">
                  <Input
                    type="email"
                    name="Email"
                    id="EmailVerticalIcons"
                    placeholder="Email"
                  />
                  <div className="form-control-position">
                    <Mail size={15} />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="12">
                <Label for="IconsMobile">Mobile</Label>
                <FormGroup className="has-icon-left position-relative">
                  <Input
                    type="number"
                    name="mobile"
                    id="IconsMobile"
                    placeholder="Mobile"
                  />
                  <div className="form-control-position">
                    <Smartphone size={15} />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="12">
                <Label for="IconsPassword">Password</Label>
                <FormGroup className="has-icon-left position-relative">
                  <Input
                    type="password"
                    name="password"
                    id="IconsPassword"
                    placeholder="Password"
                  />
                  <div className="form-control-position">
                    <Lock size={15} />
                  </div>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="has-icon-left position-relative">
                  <Checkbox
                    color="primary"
                    icon={<Check className="vx-icon" size={16} />}
                    label="Remember Me"
                    defaultChecked={false}
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="has-icon-left position-relative">
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
export default VerticalFormIcons
