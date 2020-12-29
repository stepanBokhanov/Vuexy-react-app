import React from "react"
import { withRouter } from "react-router-dom"
import { CardBody, FormGroup, Form, Input, Button, Label } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { User, Lock, Check } from "react-feather"
import * as actions from "../../../../redux/actions/auth/loginActions"
import { connect } from "react-redux"
import { history } from "../../../../history"

class LoginJWT extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false
  }

  componentDidMount(){
    if(localStorage.remember){
      this.setState({
        username: localStorage.username,
        password: localStorage.password,
        remember: localStorage.remember
      })
    }
  }
  handleLogin = e => {
    e.preventDefault()
    if(this.state.remember){
      localStorage.username = this.state.username;
      localStorage.password = this.state.password;
      localStorage.remember = this.state.remember;
    }
    this.props.onAuth(this.state.username, this.state.password);
    // console.log(this.props.values);
  }

  handleRemember = e => {
    // console.log(e.target.checked)
    this.setState({remember: e.target.checked})
  }
  render() {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          <Form action="/" onSubmit={this.handleLogin}>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="username"
                placeholder="Username"
                value={this.state.username}
                onChange={e => this.setState({ username: e.target.value })}
                required
              />
              <div className="form-control-position">
                <User size={15} />
              </div>
              <Label>Username</Label>
            </FormGroup>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Lock size={15} />
              </div>
              <Label>Password</Label>
            </FormGroup>
            <FormGroup className="d-flex justify-content-between align-items-center">
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultChecked={this.state.remember}
                onChange={this.handleRemember}
              />
              <div className="float-right">
                {/* <Link to="/pages/forgot-password">Forgot Password?</Link> */}
              </div>
            </FormGroup>
            <div className="d-flex justify-content-between">
              <Button.Ripple
                color="primary"
                outline
                onClick={() => {
                  history.push("/register")
                }}
              >
                Register
              </Button.Ripple>
              <Button.Ripple color="primary" type="submit">
                Login
              </Button.Ripple>
            </div>
          </Form>
        </CardBody>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginJWT))
