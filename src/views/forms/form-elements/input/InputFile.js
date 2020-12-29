import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Row,
  Col
} from "reactstrap"

class InputFile extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Input File</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label for="inputFile">Simple File Input</Label>
                <Input type="file" id="inputFile" name="fileInpur" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label for="customFile">Custom File Input</Label>
                <CustomInput
                  type="file"
                  id="exampleCustomFileBrowser"
                  name="customFile"
                />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
export default InputFile
