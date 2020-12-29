import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Input,
  CustomInput,
  Row,
  Col
} from "reactstrap"

class SelectReactstrap extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Reactstrap Select</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="6" sm="12" className="my-1">
              <FormGroup>
                <h5 className="text-bold-600">Basic Select</h5>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Pulp Fiction</option>
                  <option>Nightcrawler</option>
                  <option>Donnie Darko</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="6" sm="12" className="my-1">
              <FormGroup>
                <h5 className="text-bold-600">Custom Select</h5>
                <CustomInput
                  type="select"
                  name="select"
                  id="exampleSelectCustom"
                >
                  <option>Pulp Fiction</option>
                  <option>Nightcrawler</option>
                  <option>Donnie Darko</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12" className="my-1">
              <FormGroup>
                <h5 className="text-bold-600">Multi Select</h5>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelectMulti"
                  multiple
                >
                  <option>Square</option>
                  <option>Rectangle</option>
                  <option>Circle</option>
                  <option>Triangle</option>
                  <option>Pentagon</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="6" sm="12" className="my-1">
              <FormGroup>
                <h5 className="text-bold-600">Disabled Select</h5>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelectDisabled"
                  disabled
                >
                  <option>Pulp Fiction</option>
                  <option>Nightcrawler</option>
                  <option>Donnie Darko</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
export default SelectReactstrap
