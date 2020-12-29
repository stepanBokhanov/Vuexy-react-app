import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap"

class CheckboxBasic extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Basic Checkboxes</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" defaultChecked /> Active
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> Inactive
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" defaultChecked disabled /> Active
                Disabled
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" disabled /> Inactive Disabled
              </Label>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default CheckboxBasic
