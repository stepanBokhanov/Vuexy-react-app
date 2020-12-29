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
  XCircle,
  Trash,
  Trash2,
  Delete,
  MinusCircle
} from "react-feather"
import Chip from "./ChipComponent"
import { chipsClosableIcons } from "./ChipSourceCode"

class ChipsClosableIcons extends React.Component {
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
            <CardTitle>Customized Closeable Icon</CardTitle>
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
              You can use prop <code>closableIcon</code> with prop{" "}
              <code>closable</code> to create a chip with customized close icon.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Chip
                  className="mr-1"
                  text="Dribble"
                  closableIcon={<Trash />}
                  closable
                />
                <Chip
                  className="mr-1"
                  text="Github"
                  closableIcon={<Trash2 />}
                  closable
                />
                <Chip
                  className="mr-1"
                  text="Behance"
                  closableIcon={<Delete />}
                  closable
                />
                <Chip
                  className="mr-1"
                  text="ReactJS"
                  closableIcon={<MinusCircle />}
                  closable
                />
                <Chip text="Vuexy" closableIcon={<XCircle />} closable />
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {chipsClosableIcons}{" "}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ChipsClosableIcons
