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
import { Eye, Code } from "react-feather"
import { chipsClosable } from "./ChipSourceCode"

class ChipsClosable extends React.Component {
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
            <CardTitle>Chips Closable</CardTitle>
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
              Use prop <code>closable</code> to make your chips closable.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Chip className="mr-1" text="Dribble" closable />
                <Chip className="mr-1" text="Github" closable />
                <Chip className="mr-1" text="Behance" closable />
                <Chip className="mr-1" text="ReactJS" closable />
                <Chip text="Vuexy" closable />
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {chipsClosable}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ChipsClosable
