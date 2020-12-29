import React from "react"
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap"
class SocialLinks extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>
            <Col sm="12">
              <FormGroup>
                <Label for="twitter">Twitter</Label>
                <Input id="twitter" defaultValue="https://www.twitter.com" />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="facebook">Facebook</Label>
                <Input id="facebook" placeholder="Add Link" />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="google">Google+</Label>
                <Input id="google" placeholder="Add Link" />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="linkedin">Linkedin</Label>
                <Input id="linkedin" defaultValue="https://www.linkedin.com" />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="instagram">Instagram</Label>
                <Input id="instagram" placeholder="Add Link" />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="quora">Quora</Label>
                <Input id="quora" placeholder="Add Link" />
              </FormGroup>
            </Col>
            <Col className="d-flex justify-content-start flex-wrap" sm="12">
              <Button.Ripple className="mr-50" type="submit" color="primary">
                Save Changes
              </Button.Ripple>
              <Button.Ripple type="submit" color="danger">
                Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </React.Fragment>
    )
  }
}
export default SocialLinks
