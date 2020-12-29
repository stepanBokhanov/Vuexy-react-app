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
import { Eye, Code } from "react-feather"
import { avatarColors } from "./AvatarSourceCode"

class AvatarColors extends React.Component {
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
            <CardTitle>Colors</CardTitle>
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
              Use prop{" "}
              <code>
                color=[primary | success | danger | info | warning | dark]
              </code>{" "}
              to change background color of your avatar.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Avatar color="primary" className="mr-1" content="V" />
                <Avatar color="success" className="mr-1" content="U" />
                <Avatar color="danger" className="mr-1" content="E" />
                <Avatar color="info" className="mr-1" content="X" />
                <Avatar color="warning" className="mr-1" content="Y" />
                <Avatar color="dark" content="X" />
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {avatarColors}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default AvatarColors
