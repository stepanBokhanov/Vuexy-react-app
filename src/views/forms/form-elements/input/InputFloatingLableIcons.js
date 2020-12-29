import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Input,
  Row,
  Col,
  Label
} from "reactstrap"
import { Phone, File } from "react-feather"

class InputFloatingLabelIcons extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Input with Floating Labels And Icons</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg="6" md="12">
              <div className="font-medium-2 text-bold-600 mb-2">Left Icon</div>
              <FormGroup className="position-relative form-label-group has-icon-left">
                <Input type="text" placeholder="Icon Left, Default Input" />
                <div className="form-control-position">
                  <Phone size={15} />
                </div>
                <Label>Icon Left, Default Input</Label>
              </FormGroup>
            </Col>
            <Col lg="6" md="12">
              <div className="font-medium-2 text-bold-600 mb-2">Right Icon</div>
              <FormGroup className="position-relative form-label-group">
                <Input type="text" placeholder="Icon Right, Default Input" />
                <div className="form-control-position">
                  <File size={15} />
                </div>
                <Label>Icon Right, Default Input</Label>
              </FormGroup>
            </Col>
            <Col lg="6" md="12">
              <div className="font-medium-2 text-bold-600 mb-2">
                Left Icon With Divider
              </div>
              <FormGroup className="position-relative form-label-group has-icon-left input-divider-left">
                <Input type="text" placeholder="Left Icon With Divider" />
                <div className="form-control-position">
                  <Phone />
                </div>
                <Label>Left Icon With Divider</Label>
              </FormGroup>
            </Col>

            <Col lg="6" md="12">
              <div className="font-medium-2 text-bold-600 mb-2">
                Right Icon With Divider
              </div>
              <FormGroup className="position-relative form-label-group input-divider-right">
                <Input type="text" placeholder="Right Icon With Divider" />
                <div className="form-control-position">
                  <File />
                </div>
                <Label>Right Icon With Divider</Label>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
export default InputFloatingLabelIcons
