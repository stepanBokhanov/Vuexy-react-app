import React from "react"
import {
  Media,
  Row,
  Col,
  Button,
  Form,
  Input,
  Label,
  FormGroup
} from "reactstrap"
import userImg from "../../../../assets/img/portrait/small/admin-user-icon-24.jpg"
import axios from "axios"
import {connect} from "react-redux"
import { actions } from "react-table"
import * as action from "../../../../redux/actions/auth/loginActions"
class UserAccountTab extends React.Component {
  state = {
    email: "",
    first_name: "",
    last_name: "",
    username: "",
    password: ""
  }
  fetchUser = () => {
    axios.get(`http://127.0.0.1:8000/api/user/?token=${this.props.token}`)
      .then(res => {
        this.setState(res.data)
        console.log(this.state)
      });
  }
  componentDidMount() {
    this.fetchUser();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchUser();
    }
  }
  handleUpdate = e => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/user/?token=${this.props.token}`, {
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      password: this.state.password
    })
    .then(res => {
      this.props.logout();
      console.log(this.props.token)
    })
  }
  render() {
    return (
      <Row>
        <Col sm="12">
          <Media className="mb-2">
            <Media className="mr-2 my-25" left href="#">
              <Media
                className="users-avatar-shadow rounded"
                object
                src={userImg}
                alt="user profile image"
                height="84"
                width="84"
              />
            </Media>
            <Media className="mt-2" body>
              <Media className="font-medium-1 text-bold-600" tag="p" heading>
                {this.state.first_name} {this.state.last_name}
              </Media>
            </Media>
          </Media>
        </Col>
        <Col sm="12">
          <Form onSubmit={this.handleUpdate}>
            <Row>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="token">Token</Label>
                  <Input
                    type="text"
                    disabled
                    value={this.props.token}
                    id="token"
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="text"
                    value={this.state.email}
                    id="email"
                    placeholder="Username"
                    onChange={e=> this.setState({email: e.target.value})}
                  />
                </FormGroup>
              </Col>

              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="firstname">First Name</Label>
                  <Input
                    type="text"
                    value={this.state.first_name}
                    id="firstname"
                    placeholder="First Name"
                    onChange={e => this.setState({first_name: e.target.value})}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                <Label for="lastname">Last Name</Label>
                  <Input
                    type="text"
                    value={this.state.last_name}
                    id="lastname"
                    placeholder="Last Name"
                    onChange={e => this.setState({last_name: e.target.value})}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    value={this.state.username}
                    id="username"
                    required
                    placeholder="Username"
                    onChange={e => this.setState({username: e.target.value})}
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="text"
                    id="password"
                    required
                    placeholder="Password"
                    onChange={e => this.setState({password: e.target.value})}
                  />
                </FormGroup>
              </Col>
              <Col className="d-flex justify-content-end flex-wrap mt-2" sm="12">
                <Button.Ripple className="mr-1" color="primary">
                  Save Changes
                </Button.Ripple>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    )
  }
}
const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(action.logout())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAccountTab)
