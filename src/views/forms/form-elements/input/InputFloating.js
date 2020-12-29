import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from "reactstrap"

class InputFloating extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Floating Input</CardTitle>
        </CardHeader>
        <CardBody>
          <p className="mb-2">
            For Floting Label Inputs,you'll have to use{" "}
            <code>.form-label-group</code> class as a wrapper & add attribute
            disabled for disabled Floating Label Input.
          </p>
          <Row>
            <Col md="6" sm="12">
              <FormGroup className="form-label-group">
                <Input
                  type="text"
                  id="floatingInput"
                  placeholder="Label Placeholder"
                />
                <Label for="floatingInput">Label Placeholder</Label>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup className="form-label-group">
                <Input
                  type="text"
                  id="squareInputDisabled"
                  placeholder="Label Placeholder"
                  disabled
                />
                <Label for="squareInputDisabled">Label Placeholder</Label>{" "}
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
export default InputFloating
