import React from "react"
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap"
import {
  Link,
  Twitter,
  Facebook,
  Instagram,
  GitHub,
  Codepen,
  Slack
} from "react-feather"
class UserSocialTab extends React.Component {
  render() {
    return (
      <Form className="mt-2" onSubmit={e => e.preventDefault()}>
        <h5 className="mb-1">
          <Link size={15} />
          <span className="align-middle ml-50">Social Links</span>
        </h5>
        <Row>
          <Col md="6" sm="12">
            <Label for="twitter">Twitter</Label>
            <FormGroup className="position-relative has-icon-left">
              <Input id="twitter" placeholder="https://www.twitter.com/" />
              <div className="form-control-position">
                <Twitter size={15} />
              </div>
            </FormGroup>
            <Label for="facebook">Facebook</Label>
            <FormGroup className="position-relative has-icon-left">
              <Input id="facebook" placeholder="https://www.facebook.com/" />
              <div className="form-control-position">
                <Facebook size={15} />
              </div>
            </FormGroup>
            <Label for="instagram">Instagram</Label>
            <FormGroup className="position-relative has-icon-left">
              <Input id="instagram" placeholder="https://www.instagram.com/" />
              <div className="form-control-position">
                <Instagram size={15} />
              </div>
            </FormGroup>
          </Col>
          <Col md="6" sm="12">
            <Label for="github">Github</Label>
            <FormGroup className="position-relative has-icon-left">
              <Input id="github" placeholder="https://www.github.com/" />

              <div className="form-control-position">
                <GitHub size={15} />
              </div>
            </FormGroup>
            <Label for="codepen">Codepen</Label>
            <FormGroup className="position-relative has-icon-left">
              <Input id="codepen" placeholder="https://www.codepen.com/" />
              <div className="form-control-position">
                <Codepen size={15} />
              </div>
            </FormGroup>
            <Label for="slack">Slack</Label>
            <FormGroup className="position-relative has-icon-left">
              <Input id="slack" placeholder="https://www.slack.com/" />
              <div className="form-control-position">
                <Slack size={15} />
              </div>
            </FormGroup>
          </Col>
          <Col className="d-flex justify-content-end flex-wrap" sm="12">
            <Button.Ripple className="mr-1" color="primary">
              Save Changes
            </Button.Ripple>
            <Button.Ripple color="flat-warning">Reset</Button.Ripple>
          </Col>
        </Row>
      </Form>
    )
  }
}
export default UserSocialTab
