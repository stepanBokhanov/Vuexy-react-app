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
import { Eye, Code, Facebook, Instagram, Twitter } from "react-feather"
import { avatarBadge } from "./AvatarSourceCode"

class AvatarBadge extends React.Component {
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
            <CardTitle>Badge</CardTitle>
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
              You can add notification label to avatar by passing{" "}
              <code>badgeUp</code>
              prop as true and <code>badgeText</code>,{" "}
              <code>
                badgeColor=[primary | success | danger | info | warning | dark]
              </code>
              .
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Avatar
                  className="mr-1"
                  color="primary"
                  icon={<Facebook />}
                  badgeText="7"
                  badgeColor="danger"
                  badgeUp
                />
                <Avatar
                  className="mr-1"
                  color="info"
                  icon={<Twitter />}
                  badgeText="6"
                  badgeColor="danger"
                  badgeUp
                />
                <Avatar
                  icon={<Instagram />}
                  color="success"
                  badgeText="6"
                  badgeColor="danger"
                  badgeUp
                />
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {avatarBadge}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default AvatarBadge
