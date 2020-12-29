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
import {
  Eye,
  Code,
  GitHub,
  Calendar,
  Inbox,
  Camera,
  Award
} from "react-feather"
import Avatar from "./AvatarComponent"
import { avatarIcons } from "./AvatarSourceCode"

class AvatarIcons extends React.Component {
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
            <CardTitle>Icons</CardTitle>
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
              Use prop <code>icon</code> to create avatar with icon.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Avatar color="primary" className="mr-1" icon={<GitHub />} />
                <Avatar color="success" className="mr-1" icon={<Calendar />} />
                <Avatar color="danger" className="mr-1" icon={<Inbox />} />
                <Avatar color="info" className="mr-1" icon={<Camera />} />
                <Avatar color="warning" icon={<Award />} />
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {avatarIcons}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default AvatarIcons
