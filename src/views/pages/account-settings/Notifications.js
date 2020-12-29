import React from "react"
import { CustomInput, Row, Col, Button } from "reactstrap"

class Notification extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <h6 className="mb-1">Activity</h6>
            <CustomInput
              type="switch"
              className="d-block mb-2"
              id="article"
              name="article"
              inline
            >
              <span className="mb-0 ml-sm-0 switch-label">
                Email me when someone comments on my article
              </span>
            </CustomInput>
            <CustomInput
              type="switch"
              className="d-block mb-2"
              id="form"
              name="form"
              inline
            >
              <span className="mb-0 switch-label">
                Email me when someone answers on my form
              </span>
            </CustomInput>
            <CustomInput
              type="switch"
              className="d-block mb-2"
              id="follow"
              name="follow"
              inline
            >
              <span className="mb-0 switch-label">
                Email me when someone follows me
              </span>
            </CustomInput>
          </Col>
          <Col className="mt-1" sm="12">
            <h6 className="mb-1">Application</h6>
            <CustomInput
              type="switch"
              className="d-block mb-2"
              id="news"
              name="news"
              inline
            >
              <span className="mb-0 switch-label">News and announcements</span>
            </CustomInput>
            <CustomInput
              type="switch"
              className="d-block mb-2"
              id="update"
              name="update"
              inline
            >
              <span className="mb-0 switch-label">Weekly product updates</span>
            </CustomInput>
            <CustomInput
              type="switch"
              className="d-block mb-2"
              id="blog"
              name="blog"
              inline
            >
              <span className="mb-0 switch-label">Weekly blog digest</span>
            </CustomInput>
          </Col>
          <Col sm="12">
            <Button.Ripple className="mr-1" color="primary">
              Save Changes
            </Button.Ripple>
            <Button.Ripple color="danger" outline>
              Cancel
            </Button.Ripple>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Notification
