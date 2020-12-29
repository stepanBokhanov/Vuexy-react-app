import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Input,
  FormGroup,
  Label,
  Row,
  Col
} from "reactstrap"

class InputFloatingSizes extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Input Sizes With Floating Labels</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use <code>bsSize="sm / lg"</code> attribute with Input tag to change
            size of input and <code>.form-label-group</code> as a wrapper.
          </p>
          <Row>
            <Col sm="12">
              <div className="font-medium-2 text-bold-600 mb-2">Large</div>
              <FormGroup className="form-label-group">
                <Input type="text" bsSize="lg" placeholder="Large Input" />
                <Label>Large Input</Label>
              </FormGroup>
            </Col>
            <Col sm="12">
              <div className="font-medium-2 text-bold-600 mb-2">Default</div>
              <FormGroup className="form-label-group">
                <Input type="text" placeholder="Default Input" />
                <Label>Default Input</Label>
              </FormGroup>
            </Col>
            <Col sm="12">
              <div className="font-medium-2 text-bold-600 mb-2">Small</div>
              <FormGroup className="form-label-group">
                <Input type="text" bsSize="sm" placeholder="Small Input" />
                <Label>Small Input</Label>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
export default InputFloatingSizes
