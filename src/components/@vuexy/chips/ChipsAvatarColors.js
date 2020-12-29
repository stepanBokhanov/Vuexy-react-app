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
import Chip from "./ChipComponent"
import { Eye, Code, User } from "react-feather"
import { chipsAvatarColors } from "./ChipSourceCode"

class ChipsAvatarColors extends React.Component {
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
            <CardTitle>Avatar Colors</CardTitle>
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
                avatarColor=[primary | success | danger | info | warning | dark]
              </code>{" "}
              to create a colored avatar chip.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Chip
                  className="mr-1"
                  avatarColor="primary"
                  avatarText="RX"
                  text="Avatar Text"
                />
                <Chip
                  className="mr-1"
                  avatarColor="success"
                  avatarText="VS"
                  text="Avatar Text"
                />
                <Chip
                  className="mr-1"
                  avatarColor="info"
                  avatarIcon={<User />}
                  text="Avatar Text"
                />
                <Chip
                  className="mr-1"
                  avatarColor="danger"
                  avatarIcon={<User />}
                  text="Avatar Text"
                />
                <Chip
                  avatarColor="warning"
                  avatarIcon={<User />}
                  text="Avatar Text"
                />
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {chipsAvatarColors}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ChipsAvatarColors
