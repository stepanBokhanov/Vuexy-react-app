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
  User,
  Share,
  Mail,
  Slash,
  Battery,
  Edit
} from "react-feather"
import Chip from "./ChipComponent"
import { chipsIcons } from "./ChipSourceCode"

class ChipsIcons extends React.Component {
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
              Use prop <code>avatarIcon</code> add icon to avatar.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Chip className="mr-1" avatarIcon={<User />} text="User Icon" />
                <Chip
                  className="mr-1"
                  avatarColor="primary"
                  avatarIcon={<Share />}
                  text="Share Icon"
                />
                <Chip
                  className="mr-1"
                  avatarColor="success"
                  avatarIcon={<Mail />}
                  text="Mail Icon"
                />
                <Chip
                  className="mr-1"
                  avatarColor="danger"
                  avatarIcon={<Slash />}
                  text="Block Icon"
                />
                <Chip
                  className="mr-1"
                  avatarColor="warning"
                  avatarIcon={<Battery />}
                  text="Battery Icon"
                />
                <Chip
                  className="mr-1"
                  avatarColor="info"
                  avatarIcon={<Edit />}
                  text="Edit Icon"
                />
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {chipsIcons}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ChipsIcons
