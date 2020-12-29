import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button
} from "reactstrap"

class InputValidation extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    city: "",
    isValid: null
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.firstName.length > 0) {
      this.setState({ isValid: true })
    } else if (this.state.firstName.length === 0) {
      this.setState({ isValid: false })
    }

    if (this.state.city.length > 0) {
      this.setState({ isValid: true })
    } else if (this.state.city.length === 0) {
      this.setState({ isValid: false })
    }
    if (this.state.lastName.length > 0) {
      this.setState({ isValid: true })
    } else if (this.state.lastName.length === 0) {
      this.setState({ isValid: false })
    }
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Input Validation With Tooltip</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use class <code>.valid/invalid-tooltip</code> to display validation
            tooltip.
          </p>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col md="4" sm="12" className="mb-2">
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input
                    type="text"
                    onChange={e => this.setState({ firstName: e.target.value })}
                    value={this.state.firstName}
                    id="firstName"
                    name="firstName"
                    valid={this.state.isValid === true}
                    invalid={this.state.isValid === false}
                  />
                  {this.state.isValid ? (
                    <span className="valid-tooltip">Looks Good!</span>
                  ) : this.state.isValid === false ? (
                    <span className="invalid-tooltip">
                      Please enter a First Name
                    </span>
                  ) : (
                    ""
                  )}
                </FormGroup>
              </Col>
              <Col md="4" sm="12" className="mb-2">
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input
                    type="text"
                    onChange={e => this.setState({ lastName: e.target.value })}
                    value={this.state.lastName}
                    id="lastName"
                    name="lastName"
                    valid={this.state.isValid === true}
                    invalid={this.state.isValid === false}
                  />
                  {this.state.isValid ? (
                    <span className="valid-tooltip">Looks Good!</span>
                  ) : this.state.isValid === false ? (
                    <span className="invalid-tooltip">
                      Please enter a Last Name
                    </span>
                  ) : (
                    ""
                  )}
                </FormGroup>
              </Col>
              <Col md="4" sm="12" className="mb-2">
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input
                    type="text"
                    onChange={e => this.setState({ city: e.target.value })}
                    value={this.state.city}
                    id="city"
                    name="city"
                    valid={this.state.isValid === true}
                    invalid={this.state.isValid === false}
                  />
                  {this.state.isValid ? (
                    <span className="valid-tooltip">Looks Good!</span>
                  ) : this.state.isValid === false ? (
                    <span className="invalid-tooltip">Please enter a City</span>
                  ) : (
                    ""
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Button.Ripple color="primary" onClick={this.handleSubmit}>
              Submit
            </Button.Ripple>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default InputValidation
