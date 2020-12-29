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

class FloatingLabels extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Vertical Form With Floating Labels</CardTitle>
        </CardHeader>
        <CardBody>
          <Form className="mt-2">
            <Row>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="name"
                    id="nameFloating"
                    placeholder="First Name"
                  />
                  <Label for="nameFloating">First Name</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="email"
                    name="Email"
                    id="EmailFloating"
                    placeholder="Email"
                  />
                  <Label for="EmailFloating">Email</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="mobile"
                    id="mobileFloating"
                    placeholder="Mobile"
                  />
                  <Label for="mobileFloating">Mobile</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="password"
                    name="password"
                    id="passwordFloating"
                    placeholder="Password"
                  />
                  <Label for="passwordFloating">Password</Label>
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
export default FloatingLabels
