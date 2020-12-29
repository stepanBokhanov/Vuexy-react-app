import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Input,
  FormGroup,
  Row,
  Col
} from "reactstrap"

class InputSizes extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Input Sizes</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use <code>bsSize="sm / lg"</code> attribute with Input tag to change
            size of input.
          </p>
          <Row>
            <Col sm="12">
              <div className="font-medium-2 text-bold-600 mb-1">Large</div>
              <FormGroup>
                <Input type="text" bsSize="lg" placeholder="Large Input" />
              </FormGroup>
            </Col>
            <Col sm="12">
              <div className="font-medium-2 text-bold-600 mb-1">Default</div>
              <FormGroup>
                <Input type="text" placeholder="Default Input" />
              </FormGroup>
            </Col>
            <Col sm="12">
              <div className="font-medium-2 text-bold-600 mb-1">Small</div>
              <FormGroup>
                <Input type="text" bsSize="sm" placeholder="Small Input" />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
export default InputSizes
