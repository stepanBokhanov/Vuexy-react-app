import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Col,
  Input,
  Form,
  Button
} from "reactstrap"

import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"

class HorizontalForm extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Horizontal Form</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup row>
              <Col md="4">
                <span>First Name</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="First Name"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="4">
                <span>Email</span>
              </Col>
              <Col md="8">
                <Input
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="Email"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="4">
                <span>Mobile</span>
              </Col>
              <Col md="8">
                <Input
                  type="number"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="4">
                <span>Password</span>
              </Col>
              <Col md="8">
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={{ size: 8, offset: 4 }}>
                <Checkbox
                  color="primary"
                  icon={<Check className="vx-icon" size={16} />}
                  label="Remember Me"
                  defaultChecked={false}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={{ size: 8, offset: 4 }}>
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
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default HorizontalForm
