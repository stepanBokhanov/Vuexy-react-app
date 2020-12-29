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

class RadioBasic extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup check inline>
              <Label check>
                <Input type="radio" name="basicRadio" defaultChecked /> Active
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="radio" name="basicRadio" /> Inactive
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="radio" defaultChecked disabled /> Active Disabled
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="radio" disabled /> Inactive Disabled
              </Label>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default RadioBasic
