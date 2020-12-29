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
import { chipsDefault } from "./ChipSourceCode"
import chipImg from "../../../assets/img/portrait/small/avatar-s-2.jpg"
class ChipsDefault extends React.Component {
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
            <CardTitle>Default</CardTitle>
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
            <p>Chips helps you represent simple data with Various options.</p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Chip className="mr-1" text="Basic Chip" />
                <Chip className="mr-1" avatarText="RX" text="Avatar Text" />
                <Chip
                  className="mr-1"
                  avatarIcon={<User />}
                  text="Avatar Icon"
                />
                <Chip
                  className="mr-1"
                  avatarImg={chipImg}
                  text="Avatar Image"
                />
                <Chip text="Chip Closable" closable />
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {chipsDefault}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ChipsDefault
