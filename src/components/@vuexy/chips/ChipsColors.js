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
import Chip from "./ChipComponent"
import classnames from "classnames"
import { Eye, Code, User } from "react-feather"
import { chipsColors } from "./ChipSourceCode"
import chipImg from "../../../assets/img/portrait/small/avatar-s-2.jpg"
class ChipsColors extends React.Component {
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
              <code>color=[primary | success | danger | info | warning ]</code>{" "}
              to create a colored chip.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Chip className="mr-1" color="primary" text="Primary Chip" />
                <Chip
                  className="mr-1"
                  color="success"
                  avatarText="RX"
                  text="Avatar Text"
                />
                <Chip
                  className="mr-1"
                  color="info"
                  avatarIcon={<User />}
                  text="Avatar Icon"
                />
                <Chip
                  className="mr-1"
                  color="warning"
                  avatarImg={chipImg}
                  text="Avatar Image"
                />
                <Chip color="danger" text="Chip Closable" closable />
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {chipsColors}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ChipsColors
