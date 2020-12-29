import React from "react"
import Wizard from "./WizardComponent"
import { AvInput, AvGroup, AvFeedback, AvField } from "availity-reactstrap-validation"
import {
  Label,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader
} from "reactstrap"
import Checkbox from "../checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
class WizardValidation extends React.Component {
  state = {
    steps: [
      {
        title: 1,
        content: <Row>
          <Col md="6" sm="12">
            <AvGroup>
              <Label> First Name </Label>
              <AvInput name="first-name" type="text" required />
              <AvFeedback>Please enter valid First Name</AvFeedback>
            </AvGroup>
          </Col>
          <Col md="6" sm="12">
            <AvGroup>
              <Label> Last Name </Label>
              <AvInput name="last-name" type="text" required />
              <AvFeedback>Please enter valid Last Name</AvFeedback>
            </AvGroup>
          </Col>
          <Col md="6" sm="12">
            <AvGroup>
              <Label> Email </Label>
              <AvInput name="last-name" type="email" required />
              <AvFeedback>Please enter valid email</AvFeedback>
            </AvGroup>
          </Col>
          <Col md="6" sm="12">
            <AvGroup>
              <AvField type="select" name="city-name" label="City Name" required>
                <option defaultValue>Select City</option>
                <option>New York</option>
                <option>Chicago</option>
                <option>San Francisco</option>
                <option>Boston</option>
              </AvField>
            </AvGroup>
          </Col>
        </Row>
      },
      {
        title: 2,
        content: <Row>
          <Col md="6" sm="12">
            <AvGroup>
              <Label> Proposal Title </Label>
              <AvInput name="Proposal-Title" type="text" required />
              <AvFeedback>Please enter valid Title</AvFeedback>
            </AvGroup>
            <AvGroup>
              <Label> Job Title </Label>
              <AvInput name="Job-Title" type="text" required />
              <AvFeedback>Please enter valid Job Title</AvFeedback>
            </AvGroup>
          </Col>
          <Col md="6" sm="12">
            <AvGroup>
              <Label> Proposal Description </Label>
              <AvInput name="description" type="textarea" rows="5" required />
              <AvFeedback>Please enter valid Description</AvFeedback>
            </AvGroup>
          </Col>
        </Row>
      },
      {
        title: 3,
        content: <Row>
          <Col md="6" sm="12">
            <AvGroup>
              <Label> Event Name </Label>
              <AvInput name="Event-Name" type="text" required />
              <AvFeedback>Event Name</AvFeedback>
            </AvGroup>
          </Col>
          <Col md="6" sm="12">
            <AvGroup>
              <AvField type="select" name="city-name" label="City Name" required>
                <option defaultValue>Select City</option>
                <option>New York</option>
                <option>Chicago</option>
                <option>San Francisco</option>
                <option>Boston</option>
              </AvField>
            </AvGroup>
          </Col>
          <Col md="6" sm="12">
            <AvGroup>
              <AvField type="select" name="status" label="Event Status" required>
                <option>Planning</option>
                <option>In Process</option>
                <option>Finished</option>
              </AvField>
            </AvGroup>
          </Col>
          <Col md="6" sm="12">
            <AvGroup>
              <Label> Event Status </Label>
              <Label className="mr-2">Requirements :</Label>
              <div className="stacked-checkbox">
                <div className="d-inline-block mr-2">
                  <Checkbox
                    color="primary"
                    icon={<Check className="vx-icon" size={16} />}
                    label="Staffing"
                    defaultChecked={false}
                  />
                </div>
                <div className="d-inline-block">
                  <Checkbox
                    color="primary"
                    icon={<Check className="vx-icon" size={16} />}
                    label="Catering"
                    defaultChecked={false}
                  />
                </div>
              </div>
            </AvGroup>
          </Col>
        </Row>
      }
    ]
  }


  render() {
    const { steps } = this.state
    return (
      <Card>
        <CardHeader>
          <CardTitle>Wizard with Validation</CardTitle>
        </CardHeader>
        <CardBody>
          <Wizard
            validate
            steps={steps}
          />
        </CardBody>
      </Card>
    )
  }
}

export default WizardValidation
