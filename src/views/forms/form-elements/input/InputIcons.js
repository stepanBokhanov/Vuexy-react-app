import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Input,
  Row,
  Col
} from "reactstrap"
import { Phone, File } from "react-feather"

class InputIcons extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Input with Icons</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            For Input Box with left side icon, use class{" "}
            <code>.has-icon-left</code> and for use divider between icon and
            input text box use <code>.input-divider-left</code>
            or <code>.input-divider-right</code> for left and right divider
            respectively.
          </p>
          <Row>
            <Col lg="6" md="12">
              <div className="font-medium-2 text-bold-600 mb-1">Left Icon</div>
              <FormGroup className="position-relative has-icon-left">
                <Input type="text" placeholder="Icon Left, Default Input" />
                <div className="form-control-position">
                  <Phone size={15} />
                </div>
              </FormGroup>
            </Col>
            <Col lg="6" md="12">
              <div className="font-medium-2 text-bold-600 mb-1">Right Icon</div>
              <FormGroup className="position-relative">
                <Input type="text" placeholder="Icon Right, Default Input" />
                <div className="form-control-position">
                  <File size={15} />
                </div>
              </FormGroup>
            </Col>
            <Col lg="6" md="12">
              <div className="font-medium-2 text-bold-600 mb-1">
                Left Icon With Divider
              </div>
              <FormGroup className="position-relative has-icon-left input-divider-left">
                <Input type="text" placeholder="Left Icon With Divider" />
                <div className="form-control-position">
                  <Phone />
                </div>
              </FormGroup>
            </Col>

            <Col lg="6" md="12">
              <div className="font-medium-2 text-bold-600 mb-1">
                Right Icon With Divider
              </div>
              <FormGroup className="position-relative input-divider-right">
                <Input type="text" placeholder="Right Icon With Divider" />
                <div className="form-control-position">
                  <File />
                </div>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
export default InputIcons
