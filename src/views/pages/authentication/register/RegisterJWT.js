import React from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import { connect } from "react-redux"
import { history } from "../../../../history"
import * as actions from "../../../../redux/actions/auth/loginActions"

class RegisterJWT extends React.Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    username: ""
  }

  handleRegister = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.onSignup(
      this.state.username,
      this.state.email,
      this.state.password1,
      this.state.password2
    )
    console.log(this.state)
  }

  render() {
    return (
      <Form onSubmit={this.handleRegister}>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
          />
          <Label>Username</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Label>Email</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={this.state.password1}
            minLength={6}
            onChange={e => this.setState({ password1: e.target.value })}
          />
          <Label>Password</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            required
            value={this.state.password2}
            minLength={6}
            onChange={e => this.setState({ password2: e.target.value })}
            valid={this.state.password1 && this.state.password1===this.state.password2}
            invalid={!(this.state.password1===this.state.password2)}
          />
          <Label>Confirm Password</Label>
        </FormGroup>
        <FormGroup>
          <Checkbox
            color="primary"
            name="agreement"
            required={true}
            icon={<Check className="vx-icon" size={16} />}
            label=" I accept the terms & conditions."
            defaultChecked={true}
          />
        </FormGroup>
        <div className="d-flex justify-content-between">
          <Button.Ripple
            color="primary"
            outline
            onClick={() => {
              history.push("/")
            }}
          >
            Login
          </Button.Ripple>
          <Button.Ripple color="primary" type="submit">
            Register
          </Button.Ripple>
        </div>
      </Form>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      loading: state.auth.loading,
      error: state.auth.loading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSignup: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterJWT)
