import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Row,
  Col
} from "reactstrap"

class InputState extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Input State</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use attribute <code>valid/invalid</code> with input tag to indicate
            input state.
          </p>
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label for="validState">Valid State</Label>
                <Input type="text" id="validState" name="validState" valid />
                <FormFeedback valid>Sweet! that name is available</FormFeedback>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label for="invalidState">Invalid State</Label>
                <Input
                  type="text"
                  id="invalidState"
                  name="invalidState"
                  invalid
                />
                <FormFeedback>Oh noes! that name is already taken</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
export default InputState
