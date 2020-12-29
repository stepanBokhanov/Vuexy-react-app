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

class InputStyles extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Input Style</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            To set rounded border to input box, use <code>.round</code> class
            and to set square border to input box, use <code>.sqaure</code>{" "}
            class alongwith <code>Input</code> tag.
          </p>
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label for="roundedInput">Rounded Input</Label>
                <Input
                  className="round"
                  type="text"
                  id="roundedInput"
                  placeholder="Rounded Input"
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label for="squareInput">Square Input</Label>{" "}
                <Input
                  className="square"
                  type="text"
                  id="squareInput"
                  placeholder="Square Input"
                />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
export default InputStyles
