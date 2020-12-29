import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from "classnames"
import Avatar from "./AvatarComponent"
import { Eye, Code, GitHub } from "react-feather"
import { avatarStatus } from "./AvatarSourceCode"
import avatarImg from "../../../assets/img/portrait/small/avatar-s-20.jpg"

class AvatarStatus extends React.Component {
  state = {
    activeTab: "1"
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Status</CardTitle>
            <div className="views">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggleTab("1")
                    }}
                  >
                    <Eye size={15} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggleTab("2")
                    }}
                  >
                    <Code size={15} />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              use prop
              <code>status=[online | offline | away | busy]</code> to create
              avatar with status.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Avatar className="mr-1" icon={<GitHub />} status="online" />
                <Avatar className="mr-1" content="LD" status="offline" />
                <Avatar className="mr-1" content="Luisd" status="away" />
                <Avatar className="mr-1" img={avatarImg} status="busy" />
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {avatarStatus}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default AvatarStatus
