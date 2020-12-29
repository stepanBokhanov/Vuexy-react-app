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
  render() {
    return (
      <Row>
        <Col sm="12">
          <Form onSubmit={e => e.preventDefault()}>
            <Row>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="text"
                    value={this.state.username}
                    id="password"
                    placeholder="Username"
                    onChange={e=> this.setState({username: e.target.value})}
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
export default connect(mapStateToProps)(UserAccountTab)
