import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Row,
  Col,
  Button
} from "reactstrap"
import { Edit } from "react-feather"
import { Link, Redirect } from "react-router-dom"
import userImg from "../../../../assets/img/portrait/small/admin-user-icon-24.jpg"
import "../../../../assets/scss/pages/users.scss"
import axios from "axios"
import {connect} from "react-redux"
class UserView extends React.Component {
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
    if (!this.props.token) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12">
                    <Media className="d-sm-flex d-block">
                      <Media className="mt-md-1 mt-0" left>
                        <Media
                          className="rounded mr-2"
                          object
                          src={userImg}
                          alt="Generic placeholder image"
                          height="112"
                          width="112"
                        />
                      </Media>
                      <Media body>
                        <Row>
                          <Col sm="9" md="6" lg="5">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Username
                                </div>
                                <div>{this.state.username}</div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="9" md="6" lg="5">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  First Name
                                </div>
                                <div>{this.state.first_name}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Email
                                </div>
                                <div className="text-truncate">
                                  <span>{this.state.email}</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col md="12" lg="5">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Last Name
                                </div>
                                <div>{this.state.last_name}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Token
                                </div>
                                <div>
                                  <span>{this.props.token}</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Media>
                    </Media>
                  </Col>
                  <Col className="mt-1 pl-0" sm="12">
                    <Button.Ripple className="mr-1" color="primary" outline>
                      <Link to="/user/edit">
                        <Edit size={15} />
                        <span className="align-middle ml-50">Edit</span>
                      </Link>
                    </Button.Ripple>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}
export default connect(mapStateToProps)(UserView)
