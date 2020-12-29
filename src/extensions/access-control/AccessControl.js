import React from "react"
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  UncontrolledCollapse
} from "reactstrap"
import ExtensionsHeader from "../extensionsHeader"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
// import { changeRole } from "../../redux/actions/auth/loginActions"
import Radio from "../../components/@vuexy/radio/RadioVuexy"
import { ChevronDown } from "react-feather"
class AccessControl extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.role !== state.role) {
      return {
        role: props.role
      }
    }
    // Return null if the state hasn't changed
    return null
  }

  state = {
    role: this.props.role
  }

  render() {
    return (
      <React.Fragment>
        <ExtensionsHeader
          title="Access Control"
          subTitle="Add route protection using Vuexy's Access Control"
        />
        <Card>
          <CardBody className="pt-2">
            Your current role is: <strong> {this.state.role}</strong>
            <div className="d-flex justify-content-start flex-wrap align-items-center mt-1">
              <Radio
                name="role-radio"
                label="Editor"
                className="mr-1"
                defaultChecked={this.state.role === "editor"}
                // onClick={() => this.props.changeRole("editor")}
              />
              <Radio
                name="role-radio"
                label="Admin"
                defaultChecked={this.state.role === "admin"}
                // onClick={() => this.props.changeRole("admin")}
              />
            </div>
            <Card className="border mt-3">
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
              </CardHeader>
              <CardBody>
                <Button color="primary">Editor & Admin</Button>
                {this.state.role === "admin" && (
                  <Button className="ml-2" color="primary">
                    Admin Only
                  </Button>
                )}
              </CardBody>
            </Card>
            <Card className="border mt-3">
              <CardHeader>
                <CardTitle>Collapse</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="vx-collapse collapse-bordered">
                  <Card>
                    <CardHeader id="item-1">
                      <CardTitle className="lead collapse-title collapsed">
                        Article 1
                      </CardTitle>
                      <ChevronDown size={15} className="collapse-icon" />
                    </CardHeader>
                    <UncontrolledCollapse toggler="#item-1">
                      <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque rhoncus eros tortor, non fringilla lectus cursus
                        et. Fusce vel nisi ante. Aliquam sit amet lectus
                        pharetra, luctus mi sed, aliquet felis. Mauris a tortor
                        viverra, ornare tellus in, consectetur leo. Etiam nec
                        nunc nec nisl luctus tincidunt efficitur vitae elit.
                        Vestibulum iaculis nibh commodo neque ultrices lobortis.
                        Cras magna massa, pretium vitae mattis varius, pharetra
                        nec massa. Aliquam ac ex enim. Quisque consequat dui
                        libero, vel blandit lorem porttitor sit amet. Vestibulum
                        ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia Curae Nullam sed lobortis nisl, quis
                        eleifend metus.
                      </CardBody>
                    </UncontrolledCollapse>
                  </Card>
                  <Card>
                    <CardHeader id="item-2">
                      <CardTitle className="lead collapse-title collapsed">
                        Article 2
                      </CardTitle>
                      <ChevronDown size={15} className="collapse-icon" />
                    </CardHeader>
                    <UncontrolledCollapse toggler="#item-2">
                      <CardBody>
                        Nunc auctor et leo vitae suscipit. Nullam aliquet purus
                        scelerisque enim hendrerit tristique. Maecenas tincidunt
                        dui arcu, a aliquet nisl venenatis vitae. Praesent
                        mauris ligula, porta at maximus ac, rutrum vitae sapien.
                        Donec a sapien id erat dapibus dignissim sodales in est.
                        Donec gravida dapibus sapien at sollicitudin. Maecenas
                        iaculis quam ex, eu aliquam erat sagittis eget.
                        Suspendisse mollis felis nec ipsum vehicula, at posuere
                        libero viverra. Nam hendrerit dapibus eleifend. Aliquam
                        elit nulla, tincidunt pellentesque enim mollis,
                        consectetur placerat enim. Integer condimentum tristique
                        ante et ullamcorper. Mauris placerat pretium ex. Nam
                        aliquam sed tortor sit amet efficitur. Mauris quis
                        faucibus nulla. Pellentesque egestas non ipsum vel
                        maximus.
                      </CardBody>
                    </UncontrolledCollapse>
                  </Card>
                  {this.state.role === "admin" && (
                    <Card>
                      <CardHeader id="item-3">
                        <CardTitle className="lead collapse-title collapsed">
                          Article 3 - Admin Only
                        </CardTitle>
                        <ChevronDown size={15} className="collapse-icon" />
                      </CardHeader>
                      <UncontrolledCollapse toggler="#item-3">
                        <CardBody>
                          Suspendisse aliquet condimentum diam, sed aliquam nisl
                          dapibus et. Aliquam euismod ullamcorper dolor eu
                        </CardBody>
                      </UncontrolledCollapse>
                    </Card>
                  )}
                  <Card>
                    <CardHeader id="item-4">
                      <CardTitle className="lead collapse-title collapsed">
                        Article 4
                      </CardTitle>
                      <ChevronDown size={15} className="collapse-icon" />
                    </CardHeader>
                    <UncontrolledCollapse toggler="#item-4">
                      <CardBody>
                        Suspendisse aliquet condimentum diam, sed aliquam nisl
                        dapibus et. Aliquam euismod ullamcorper dolor eu
                        imperdiet. Nullam eget odio at magna gravida suscipit
                        sed vestibulum odio. Maecenas porta elit vel lectus
                        molestie, eget aliquam enim feugiat. Vivamus nec
                        faucibus nisl. Nunc venenatis tempus finibus.
                      </CardBody>
                    </UncontrolledCollapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
            <Card className="border mt-3">
              <CardHeader>
                <CardTitle>Route Protection</CardTitle>
              </CardHeader>
              <CardBody>
                <p>
                  You can add route protection using file{" "}
                  <strong>navigationConfig</strong>. Only admin can visit
                  eCommerce Dashboard.
                </p>
                <Button
                  color={this.state.role === "admin" ? "primary" : "danger"}>
                  <Link to="/ecommerce-dashboard" className="text-white">
                    Visit
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    role: state.auth.login.userRole
  }
}
export default connect(mapStateToProps)(AccessControl)
